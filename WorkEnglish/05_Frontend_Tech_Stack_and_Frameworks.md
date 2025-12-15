# Topic 5: Frontend Tech Stack & Frameworks (前端技术栈与框架)

This guide covers key English vocabulary, phrases, and a sample dialogue for discussing technical details, frameworks, and libraries in a frontend development context.

---

## 1. Key Vocabulary (核心词汇)

| English | Chinese | Example / Notes |
| :--- | :--- | :--- |
| **Component** | 组件 | We should break this into smaller **components**. |
| **State Management** | 状态管理 | We use Redux for global **state management**. |
| **Props** (Properties) | 属性 | Pass the data down via **props**. |
| **Hooks** | 钩子 (React) | We can use a custom **hook** for this logic. |
| **Lifecycle** | 生命周期 | The API call should happen in the **lifecycle** method. |
| **Virtual DOM** | 虚拟 DOM | React uses the **Virtual DOM** for performance. |
| **Dependency** | 依赖 | We need to update our **dependencies**. |
| **Library** vs **Framework** | 库 vs 框架 | React is a **library**, Angular is a **framework**. |
| **Boilerplate** | 样板代码 | There is too much **boilerplate** code. |
| **Scalability** | 可扩展性 | We need to consider the **scalability** of this architecture. |
| **Refactor** | 重构 | We need to **refactor** this legacy code. |
| **Bundle Size** | 包大小 | Importing this library will increase the **bundle size**. |
| **Server-Side Rendering** (SSR) | 服务端渲染 | We are using Next.js for **SSR**. |

---

## 2. Common Phrases (常用短语)

**Discussing Technical Choices (讨论技术选择)**
*   "Why did we choose this library over that one?" (我们为什么选这个库而不是那个？)
*   "I think we should use TypeScript for better type safety." (我觉得我们应该用 TypeScript 来获得更好的类型安全性。)
*   "This framework is overkill for such a small project." (对于这么小的项目来说，这个框架有点大材小用。)
*   "We should consider using a lightweight alternative." (我们应该考虑使用一个轻量级的替代品。)

**Implementation Details (实现细节)**
*   "We need to lift the state up to the parent component." (我们需要把状态提升到父组件。)
*   "This component is re-rendering too often." (这个组件重新渲染得太频繁了。)
*   "Let's use a context provider to avoid prop drilling." (让我们用 Context Provider 来避免属性层层传递。)
*   "Make sure to clean up the event listeners in the useEffect hook." (确保在 useEffect 钩子里清理事件监听器。)

**Upgrading & Maintenance (升级与维护)**
*   "This package is deprecated; we need to find a replacement." (这个包已经弃用了；我们需要找个替代品。)
*   "Upgrading to the latest version might introduce breaking changes." (升级到最新版本可能会引入破坏性变更。)
*   "Let's keep the dependencies up to date." (让我们保持依赖项是最新的。)

---

## 3. Sample Dialogue (情景对话)

**Context:** Technical Architecture discussion.
**Participants:**
*   **Tech Lead:** (技术主管)
*   **You:** Frontend Developer (你)

**Tech Lead:** "We need to decide on the state management solution for the new admin panel. Currently, we are just using local state, but the app is growing."

**You:** "Yeah, I've noticed that **prop drilling** is becoming a problem. Passing user data down five levels is messy. **I suggest we introduce a global state management library.**"

**Tech Lead:** "Do you have a preference? Redux, MobX, or maybe just React Context?"

**You:** "For this scale, Redux might be too much **boilerplate**. **I think React Context combined with the useReducer hook would be sufficient.** It's built-in and easier to maintain for our team."

**Tech Lead:** "That sounds reasonable. What about **performance**? Will Context cause unnecessary re-renders?"

**You:** "It could if we are not careful. We can split the contexts or use `React.memo` to optimize the **components**. If it gets really complex later, we can migrate to something like Zustand or Recoil."

**Tech Lead:** "Agreed. Let's stick with Context for now to keep the **bundle size** small. Can you create a POC (Proof of Concept)?"

**You:** "Sure, I'll set up the basic structure today."
