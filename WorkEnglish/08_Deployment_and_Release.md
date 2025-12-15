# Topic 8: Deployment & Release (部署与发布)

This guide covers key English vocabulary, phrases, and a sample dialogue for discussing deployment processes, CI/CD, and releases in a frontend development context.

---

## 1. Key Vocabulary (核心词汇)

| English | Chinese | Example / Notes |
| :--- | :--- | :--- |
| **Deploy** / **Deployment** | 部署 | We are ready to **deploy** to production. |
| **Release** | 发布 | The **release** is scheduled for Friday. |
| **Environment** | 环境 | Which **environment** are you testing on? |
| **Staging** | 预发布环境 | Test it on **staging** first. |
| **Production** (Prod) | 生产环境 | Don't break **production**! |
| **CI/CD** (Continuous Integration/Deployment) | 持续集成/部署 | The **CI/CD** pipeline failed. |
| **Pipeline** | 流水线 | Check the build **pipeline** logs. |
| **Build** | 构建 | The **build** passed successfully. |
| **Rollback** | 回滚 | We need to **rollback** to the previous version. |
| **Version** / **Tag** | 版本 / 标签 | Did you create a git **tag** for this version? |
| **Feature Flag** | 功能开关 | Use a **feature flag** to hide this feature. |
| **Canary Release** | 金丝雀发布 (灰度发布) | We are doing a **canary release** to 10% of users. |
| **Downtime** | 停机时间 | Will there be any **downtime**? |

---

## 2. Common Phrases (常用短语)

**Status of Deployment (部署状态)**
*   "The build is currently running." (构建正在运行。)
*   "The deployment failed due to a linting error." (由于代码检查错误，部署失败了。)
*   "The new version is live on production." (新版本已经在生产环境上线了。)
*   "We are waiting for the smoke tests to pass." (我们在等待冒烟测试通过。)

**Managing Issues (处理问题)**
*   "Something is wrong. We need to rollback immediately." (出问题了。我们需要立即回滚。)
*   "Who has the permission to deploy?" (谁有权限部署？)
*   "Please check the server logs." (请检查服务器日志。)
*   "We should freeze the code (Code Freeze) before the release." (发布前我们应该冻结代码。)

**Planning (计划)**
*   "When is the cut-off time for today's release?" (今天发布的截止时间是什么时候？)
*   "Are all the feature branches merged?" (所有的功能分支都合并了吗？)
*   "Let's schedule the release for low-traffic hours." (让我们把发布安排在流量低的时间段。)

---

## 3. Sample Dialogue (情景对话)

**Context:** Release Day coordination.
**Participants:**
*   **DevOps Engineer:** (运维工程师)
*   **You:** Frontend Developer (你)

**DevOps:** "Hi team, we are preparing for the v2.5 release. **Are all frontend changes merged and tested on staging?**"

**You:** "Yes, the last PR was merged an hour ago. QA has verified the critical paths. **The build on the staging environment is green (successful).**"

**DevOps:** "Great. I'm going to trigger the **deployment pipeline** for production now. Please keep an eye on the monitoring dashboards."

*(15 minutes later)*

**You:** "Hey, I'm seeing some error alerts on Sentry. It seems like some users are getting a blank screen. **I think the new JavaScript bundle might be cached incorrectly.**"

**DevOps:** "That's concerning. **Should we rollback?**"

**You:** "Give me two minutes to check... Yes, it looks like a critical issue. **Let's rollback to v2.4 immediately** to minimize impact. We can investigate the caching issue locally."

**DevOps:** "Copy that. Initiating rollback sequence now... Okay, previous version is restored. **Production is stable again.**"

**You:** "Thanks. I'll debug the build configuration and update you when we have a fix."
