# Topic 7: Bug Reporting & Fixing (Bug 报告与修复)

This guide covers key English vocabulary, phrases, and a sample dialogue for reporting, analyzing, and fixing bugs in a frontend development context.

---

## 1. Key Vocabulary (核心词汇)

| English | Chinese | Example / Notes |
| :--- | :--- | :--- |
| **Reproduce** | 复现 | I can't **reproduce** this bug on my machine. |
| **Steps to Reproduce** | 复现步骤 | Please provide the **steps to reproduce**. |
| **Expected Behavior** | 预期行为 | What is the **expected behavior**? |
| **Actual Behavior** | 实际行为 | The **actual behavior** is that the app crashes. |
| **Severity** | 严重程度 | This is a high **severity** issue. |
| **Priority** | 优先级 | We need to fix this with high **priority**. |
| **Root Cause** | 根本原因 | We are investigating the **root cause**. |
| **Workaround** | 变通方案 / 临时解决 | Is there a **workaround** for now? |
| **Hotfix** | 热修复 / 紧急修复 | We need to deploy a **hotfix** immediately. |
| **Console Error** | 控制台错误 | Check the browser **console errors**. |
| **Glitch** | 小故障 | It's just a visual **glitch**. |
| **Regression** | 回归 (旧病复发) | This looks like a **regression** bug. |
| **Patch** | 补丁 | I'll submit a **patch** later. |

---

## 2. Common Phrases (常用短语)

**Reporting a Bug (报告 Bug)**
*   "The application crashes when I click the 'Submit' button." (当我点击“提交”按钮时，应用程序崩溃了。)
*   "The layout is broken on Safari browser." (在 Safari 浏览器上布局坏了。)
*   "I'm getting a 404 error when trying to access this page." (尝试访问此页面时，我收到 404 错误。)
*   "This bug is intermittent; it doesn't happen every time." (这个 bug 是间歇性的；不是每次都发生。)

**Investigating (调查)**
*   "Can you send me a screenshot or a screen recording?" (你能发给我一张截图或屏幕录像吗？)
*   "Which browser and OS are you using?" (你用的是什么浏览器和操作系统？)
*   "Did you clear your cache?" (你清除缓存了吗？)
*   "I'm checking the network tab to see the API response." (我正在检查网络标签页以查看 API 响应。)

**Fixing & Updating (修复与更新)**
*   "I've identified the issue. It's a null check missing." (我已经确认了问题。是少了一个空值检查。)
*   "I'm working on a fix right now." (我现在正在修复。)
*   "The fix is deployed to the staging environment. Please verify." (修复已部署到预发布环境。请验证。)
*   "It turns out it was a backend issue, not frontend." (结果发现是后端问题，不是前端。)

---

## 3. Sample Dialogue (情景对话)

**Context:** QA reporting a bug to a Developer.
**Participants:**
*   **QA:** Quality Assurance Engineer (测试工程师)
*   **You:** Frontend Developer (你)

**QA:** "Hey, I found a critical bug in the checkout flow. When a user tries to pay with a credit card, the spinner keeps loading forever."

**You:** "Oh, that sounds bad. **Can you reproduce it consistently?**"

**QA:** "Yes, it happens every time on the production environment. Here are the **steps to reproduce**: Add item to cart -> Go to checkout -> Enter valid card details -> Click Pay."

**You:** "Okay. **Did you see any errors in the browser console?**"

**QA:** "Yes, there is a red error saying `Uncaught TypeError: Cannot read property 'token' of undefined`."

**You:** "Aha, that gives me a clue. It sounds like the payment API response is missing the token field, or the frontend isn't handling the error response correctly. **I'll investigate the root cause.**"

*(10 minutes later)*

**You:** "I found the issue. The API changed the response format slightly, and our frontend code wasn't updated to match. **I've created a hotfix.** It handles the new format and also adds a proper error message if it fails again. It's building now."

**QA:** "Great. Let me know when it's on staging so I can verify it."
