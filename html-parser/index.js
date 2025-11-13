const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const urls = require('./urls.json');

const outputDir = path.join(__dirname, '../EnglishAtWork_Resource');

async function processUrl(episode) {
  try {
    const { data: html } = await axios.get(episode.url);
    const $ = cheerio.load(html);

    // 移除所有 script 和 style 元素
    $('script, style').remove();

    const title = $('h3[dir="ltr"]').first().text().trim();
    const episodeInfo = $('div.details h3').text().trim();
    
    // 提取简介
    const introduction = $('div.widget-richtext p').first().text().trim();

    // 提取关键短语
    let keyPhrases = [];
    $('div.widget-richtext ul').first().find('li').each((i, el) => {
      keyPhrases.push($(el).text().trim());
    });

    // 提取听力挑战
    const listeningChallenge = $('p:contains("Listening Challenge")').next('p').text().trim();

    // 提取完整的对话文本
    let transcript = '';
    $('h3:contains("Transcript")').nextAll().each((i, el) => {
        if ($(el).is('h3')) return false; // Stop when the next h3 is found
        transcript += $(el).text().trim() + '\n\n';
    });

    // 提取听力挑战的答案
    const listeningChallengeAnswer = $('h3:contains("Listening challenge - answer")').next('p').text().trim();

    // 构建 Markdown 内容
    let markdownContent = `
# ${title}

**Episode Info:** ${episodeInfo}

## Introduction

${introduction}

## Key Phrases

${keyPhrases.map(phrase => `- ${phrase}`).join('\n')}

## Listening Challenge

${listeningChallenge}

## Transcript

${transcript}

## Listening Challenge - Answer

${listeningChallengeAnswer}
`;

    // 清理文件名并保存
    const fileName = `${String(episode.number).padStart(2, '0')}_${episode.title.replace(/[\/\\?%*:|"<>]/g, '-')}.md`;
    const filePath = path.join(outputDir, fileName);
    fs.writeFileSync(filePath, markdownContent.trim());

    console.log(`Successfully saved ${fileName}`);
  } catch (error) {
    console.error(`Error processing ${episode.url}:`, error.message);
  }
}

async function main() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const episode of urls) {
    await processUrl(episode);
  }
}

main();