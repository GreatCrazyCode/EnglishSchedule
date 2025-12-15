# Topic 6: Coding & Code Review (代码开发与审查)

This guide covers key English vocabulary, phrases, and a sample dialogue for writing code and participating in code reviews (PR reviews).

---

## 1. Key Vocabulary (核心词汇)

| English | Chinese | Example / Notes |
| :--- | :--- | :--- |
| **Pull Request** (PR) | 拉取请求 | Please review my **PR**. |
| **Merge** | 合并 | Can you **merge** this branch? |
| **Branch** | 分支 | Create a new feature **branch**. |
| **Commit** | 提交 | Write meaningful **commit** messages. |
| **Conflict** | 冲突 | There is a merge **conflict** in this file. |
| **Refactor** | 重构 | This function needs to be **refactored**. |
| **Readable** | 可读的 | The code should be clean and **readable**. |
| **Maintainable** | 可维护的 | We aim for **maintainable** code. |
| **Hardcoded** | 硬编码的 | Don't use **hardcoded** strings; use constants. |
| **Dry** (Don't Repeat Yourself) | 不重复原则 | Keep your code **DRY**. |
| **Modular** | 模块化的 | The architecture is very **modular**. |
| **Linter** | 代码检查工具 | The **linter** is throwing an error. |
| **Typo** | 拼写错误 | There is a **typo** in the variable name. |
| **Squash** | 压缩 (提交) | Please **squash** your commits before merging. |

---

## 2. Common Phrases (常用短语)

**Requesting a Review (请求审查)**
*   "I've opened a PR for the login feature. Can someone take a look?" (我为登录功能开了一个 PR。有人能看一下吗？)
*   "This is a large PR, so take your time." (这是一个很大的 PR，所以慢慢看。)
*   "I'm ready for a code review." (我准备好进行代码审查了。)

**Giving Feedback (Reviewer) (提供反馈)**
*   "This function is doing too many things. Can we split it?" (这个函数做的事情太多了。我们能拆分它吗？)
*   "Please add some comments to explain this logic." (请加一些注释来解释这个逻辑。)
*   "You might want to extract this into a utility function." (你可能想把它提取成一个工具函数。)
*   "There is a potential null pointer exception here." (这里有一个潜在的空指针异常。)
*   "Nit: Extra space here." (小问题：这里多了一个空格。)

**Responding to Feedback (Author) (回应反馈)**
*   "Good catch! I'll fix it right away." (抓得好！我马上修。)
*   "I did it this way because..." (我这样做是因为...)
*   "Done. I've pushed the changes." (搞定。我已经推送了更改。)
*   "Can we discuss this offline? It's a bit complex." (我们能线下讨论这个吗？这有点复杂。)

---

## 3. Sample Dialogue (情景对话)

**Context:** Commenting on a Pull Request (GitHub/GitLab).
**Participants:**
*   **Reviewer:** (审查者)
*   **You:** Frontend Developer (你)

**Reviewer (Comment on code):** "I see you are using a **hardcoded** URL here: `'http://api.example.com'`. We should use an environment variable instead, so it works in staging and production."

**You (Reply):** "Ah, **good catch!** I used that for testing and forgot to change it back. I'll update it to `process.env.API_URL`."

**Reviewer (Comment on code):** "Also, this `calculateTotal` function is getting quite long (50+ lines). It's hard to read. **Could you refactor it** by extracting the tax calculation logic into a separate helper function?"

**You (Reply):** "Sure. That makes sense. It will make the code more **modular** and easier to test. I'll create a `taxUtils.js` file for it."

**Reviewer (General comment):** "Other than those points, the logic looks solid. **Please squash your commits** into one before merging, as there are a lot of 'WIP' (Work In Progress) commits."

**You (Reply):** "Will do. Thanks for the review! I'll push the fixes in a moment."
