## 目标
1. 根据./EnglishAtWork_Resource中的课程内容，制定一个学习计划.
2. 一周学习四天, 周五复习总结, 周六周日休息.
4. 按要求生成每天的学习内容, 包括学习资料, 词汇, 关键表达式, 练习题等. 放在./DailyClass目录下, 文件名为Day1-06_THE QUEEN OF SHEBA.md, Day2-07_DOUBLE-BOOKED.md等.
3. 周一和周三安排一个小时的 ai 口语练习
5. 周一周三需要根据学习的内容, 安排话题进行讨论, 并提前将需要准备的表达式, 词汇列举出来, 方便用户进行学习, 放到./DailyClass目录下, 文件名为SpeakingPractice_Day1-Day2.md, SpeakingPractice_Day3-Day4.md等. 
6. 口语内容每次生成两份文件, 一个用于用户学习, 一个用于ai提示词内容
7. 目前用户的英语水平为b1水平.

## 每天课程内容
1. 学习资料
就是EnglishAtWork_Resource对于的一节内容, 写上链接即可, 格式如下
[06_THE QUEEN OF SHEBA](../EnglishAtWork_Resource/06_THE%20QUEEN%20OF%20SHEBA.md)
2. Useful Vocabulary 实用词汇
根据资料内容, 列出需要熟记的词汇, 以及简单的中文解释
3. Key Expressions 关键表达式
根据资料内容, 列出需要熟记的表达式, 以及简单的中文解释
4. Exercises 练习题
根据资料内容, 列出2个练习题, 中英文显示, 方便用户进行练习, 巩固学习内容

## 每周总结内容生成
1. 每周五生成一份总结, 包括本周学习的内容, 以及需要注意的地方, 方便用户进行复习.
2. 引言: 简要总结本周的学习主题，例如“职场沟通技巧”。
2. 主题回顾: 分别列出 Day 1 到 Day 4 的每日学习主题，并用一句话概括核心内容。
3. 核心词汇和短语: 整合本周所有学习过的重点词汇和关键表达式，并进行分类（例如：动词/动词短语、名词、形容词、按主题分类的关键表达式）。
4. 综合练习: 设计1个综合性强的练习题，要求学习者融合运用本周所学的多种技能,以检验学习效果。
2. 生成的文件放在./DailyClass目录下, 文件名为WeeklyReview_Day1-Day4.md

## 用户口语练习生成规则
1. 练习时间安排在周一和周三, 每次一个小时.
2. 根据最近两天日课的内容并进行适当扩展, 设计一个话题, 多个问题, 让用户进行练习.
3. 设计话题和问题时, 需要列出需要准备的词汇和表达式, 方便用户进行练习.

## ai口语陪练识别内容生成规则

这部分规则用于生成一个专门给AI口语陪练用作提示词（Prompt）的文件。该文件内容应为纯英文，格式清晰，以便AI准确识别。

1.  **文件名**: 文件应命名为 `AIPrompt_Day[X]-Day[X].md` (例如: `AIPrompt_Day1-Day2.md`, `AIPrompt_Day3-Day4.md`) 并存放在 `./DailyClass` 目录下。
2.  **文件开头**: 文件内容**必须**以 `# TOPIC AND QUESTIONS FOR TODAY'S SESSION` 作为一级标题开头。
3.  **Topic**: 使用 `## Topic` 作为二级标题，并用一个简洁的英文句子描述话题。
4.  **Key Vocabulary**: 使用 `## Key Vocabulary and Expressions to Practice` 作为二级标题，并列出当天需要练习的**英文**词汇和短语。
5.  **Practice Questions**: 使用 `## Practice Questions` 作为二级标题，列出5-6个**全英文**、有层次的练习问题（例如：热身、核心、扩展问题）。

