# 🚀 3-Character Code Generation Challenge 🚀

Welcome to the 3-Character Code Generation Challenge! This challenge tests your ability with **string manipulation**, **random number generation**, and **boundary handling** in JavaScript. Dive in and show your skills! 🌟

---

## 🎯 Objective 🎯

Given a string with a length between 3 and 100 inclusive, your task is to generate a unique 3-character code based on specific rules.

---

## 📜 Input 📜

- A string `s` 
  - Constraints: \(3 \leq |s| \leq 100\)

---

## 🏁 Output 🏁

- A 3-character code representation of the string.

---

## 📏 Rules 📏

1. ✅ The first character of the code should **always** be the first character of the given string.
2. ✅ The second character of the code can be any character from the given string, but its position in the string must be **strictly greater** than the position of the first character. In essence, it should be picked randomly from the 2nd character of the string up to the penultimate character.
3. ✅ The third character of the code should also be picked randomly. However, its position in the string should come **strictly after** the position of the second character.

**Keyword Highlights**: `randomly`, `position`, `string`

---

## 📖 Example 📖

Given string: `challenge`

Possible outputs: `cae`, `clg`, `cne`, etc.

---

## 🛠 Implementation 🛠

The solution should be implemented in **JavaScript**. We're looking forward to seeing a solution that's robust and can handle a variety of edge cases. Flex your coding muscles! 💪

---

## 🖋 Author 🖋

**Ntavigwa Bashombe** - Feel free to connect, share feedback, or ask any questions. Your contributions and insights are always welcome!

🌐 Share your solutions, ask questions, and collaborate in this repository! Happy coding! 🚀
