# Topic 9: Performance Optimization & Troubleshooting (性能优化与问题排查)

This guide covers key English vocabulary, phrases, and a sample dialogue for discussing web performance and troubleshooting technical issues.

---

## 1. Key Vocabulary (核心词汇)

| English | Chinese | Example / Notes |
| :--- | :--- | :--- |
| **Latency** | 延迟 | High **latency** is causing delays. |
| **Load Time** | 加载时间 | We need to reduce the page **load time**. |
| **Rendering** | 渲染 | The **rendering** performance is poor on mobile. |
| **Memory Leak** | 内存泄漏 | There seems to be a **memory leak** in the app. |
| **Optimization** | 优化 | Image **optimization** is crucial. |
| **Lazy Loading** | 懒加载 | Implement **lazy loading** for images and routes. |
| **Caching** | 缓存 | The browser **caching** strategy needs work. |
| **Bundle Analysis** | 包分析 | Let's run a **bundle analysis** to see what's taking space. |
| **Bottleneck** | 瓶颈 | The API is the performance **bottleneck**. |
| **Minify** | 压缩 (代码) | Ensure the CSS and JS are **minified**. |
| **Lighthouse** | Lighthouse (工具) | What's our **Lighthouse** score? |
| **FPS** (Frames Per Second) | 帧率 | The animation drops below 60 **FPS**. |
| **Debounce** / **Throttle** | 防抖 / 节流 | We should **debounce** the search input. |

---

## 2. Common Phrases (常用短语)

**Identifying Problems (识别问题)**
*   "The site feels sluggish / slow." (网站感觉很卡/慢。)
*   "The initial load takes more than 3 seconds." (首次加载超过了3秒。)
*   "The main thread is blocked by long-running scripts." (主线程被长时间运行的脚本阻塞了。)
*   "We are sending too many requests to the server." (我们向服务器发送了太多请求。)

**Proposing Solutions (提出解决方案)**
*   "We should implement code splitting to reduce the initial bundle size." (我们应该实施代码分割以减小初始包大小。)
*   "Let's optimize the images using WebP format." (让我们使用 WebP 格式优化图片。)
*   "We can cache the API response to avoid fetching it every time." (我们可以缓存 API 响应，避免每次都去获取。)
*   "Remove unused CSS and JavaScript." (移除未使用的 CSS 和 JavaScript。)

**Troubleshooting (排查)**
*   "Have you checked the Network tab in DevTools?" (你检查过开发者工具里的网络标签页吗？)
*   "Is this happening on a specific device or browser?" (这是发生在特定设备或浏览器上吗？)
*   "Let's profile the performance to find the bottleneck." (让我们分析一下性能以找到瓶颈。)

---

## 3. Sample Dialogue (情景对话)

**Context:** Performance Review meeting.
**Participants:**
*   **Tech Lead:** (技术主管)
*   **You:** Frontend Developer (你)

**Tech Lead:** "Our latest Lighthouse score for the homepage has dropped to 45. That's not good for SEO or user experience. **We need to prioritize performance optimization this sprint.**"

**You:** "I noticed that too. I did some profiling yesterday. **The main bottleneck seems to be the large JavaScript bundle.** We are loading the entire charting library even on pages that don't use charts."

**Tech Lead:** "That makes sense. **What do you suggest?**"

**You:** "I suggest we implement **code splitting** and **lazy loading** for heavy components. We should only load the charting library when the user actually visits the analytics page."

**Tech Lead:** "Agreed. What about the images? The hero image takes a while to appear."

**You:** "Yeah, it's a 2MB PNG file. **I'll optimize it by converting it to WebP and using responsive `srcset` attributes.** That should drastically reduce the **load time**."

**Tech Lead:** "Excellent. Also, check for any **memory leaks**. The app gets slower the longer you use it."

**You:** "I suspect some event listeners aren't being cleaned up. I'll use the Chrome Memory Profiler to track that down."
