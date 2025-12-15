# Topic 3: Requirements Analysis & User Stories (需求分析与用户故事)

This guide covers key English vocabulary, phrases, and a sample dialogue for discussing requirements and user stories in a frontend development context.

---

## 1. Key Vocabulary (核心词汇)

| English | Chinese | Example / Notes |
| :--- | :--- | :--- |
| **User Story** | 用户故事 | As a user, I want to... so that... |
| **Acceptance Criteria** (AC) | 验收标准 | Does this meet all the **acceptance criteria**? |
| **Feature** | 功能 | This is a core **feature** of the app. |
| **Spec** / **Specification** | 规格说明书 | Please refer to the technical **spec**. |
| **Mockup** / **Wireframe** | 原型图 / 线框图 | The **mockup** shows the button here. |
| **Edge Case** | 边缘情况 | Have we considered the **edge cases**? |
| **Happy Path** | 正常流程 | Let's test the **happy path** first. |
| **Validation** | 验证 | We need input **validation** on this form. |
| **Ambiguous** | 模棱两可的 | This requirement is a bit **ambiguous**. |
| **Clarify** | 澄清 | Can you **clarify** what happens if...? |
| **Priority** | 优先级 | What's the **priority** of this task? |
| **Out of scope** | 超出范围 | That feature is **out of scope** for this sprint. |
| **User Flow** | 用户流程 | The **user flow** seems a bit confusing. |

---

## 2. Common Phrases (常用短语)

**Clarifying Requirements (澄清需求)**
*   "Could you clarify the acceptance criteria for this story?" (你能澄清一下这个故事的验收标准吗？)
*   "What should happen if the user enters invalid data?" (如果用户输入无效数据会发生什么？)
*   "Is this feature required for mobile devices as well?" (这个功能也需要在移动设备上实现吗？)
*   "Do we have a design mockup for this state?" (我们有这个状态的设计原型吗？)

**Discussing Edge Cases (讨论边缘情况)**
*   "What if the network connection is lost during the upload?" (如果上传过程中网络连接丢失了怎么办？)
*   "We need to handle the case where the list is empty." (我们需要处理列表为空的情况。)
*   "Have we thought about users with slow internet speeds?" (我们考虑过网速慢的用户吗？)

**Confirming Understanding (确认理解)**
*   "So, if I understand correctly, the button should be disabled until the form is valid?" (所以，如果我理解正确的话，按钮应该在表单验证通过前保持禁用？)
*   "Just to confirm, we are using the existing API for this, right?" (确认一下，我们是用现有的 API 来做这个，对吧？)
*   "Let me recap to make sure we are on the same page." (让我重述一下，确保我们达成共识。)

---

## 3. Sample Dialogue (情景对话)

**Context:** A Grooming / Refinement meeting.
**Participants:**
*   **PO:** Product Owner (产品负责人)
*   **You:** Frontend Developer (你)

**PO:** "Let's look at the next user story: 'As a user, I want to filter the product list by price so that I can find items within my budget.'"

**You:** "Okay, looking at the description. **I have a question about the Acceptance Criteria.** It says 'User can select a price range'. Is this a dropdown menu or a slider input?"

**PO:** "Good question. The design team hasn't finalized that yet. What do you think is better?"

**You:** "A slider provides a better UX for ranges, but it might take longer to implement. A dropdown is simpler. **Also, are there any edge cases we need to handle?** For example, what if no products match the selected range?"

**PO:** "Yes, if no products are found, we should show a 'No results found' message. Let's go with the slider for now, but keep it simple. **I'll update the ticket to include the empty state requirement.**"

**You:** "Great. **One more thing**, does the filter need to apply instantly, or should there be an 'Apply' button?"

**PO:** "It should be instant. As soon as they stop sliding, the list updates."

**You:** "Understood. That might have some performance implications, so we'll need to debounce the input. **I think this story is clear enough to point now.**"
