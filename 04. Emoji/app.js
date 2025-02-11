let btn = document.querySelector("#Emoji");
const emoji = [
  "😐",
  "😒",
  "☺️",
  "🫥",
  "😶",
  "😑",
  "🤨",
  "🫡",
  "🤔",
  "🤗",
  "🤩",
  "🙂",
  "😚",
  "🥲",
  "😙",
  "😗",
  "🥰",
  "😘",
  "😍",
  "😎",
  "😋",
  "😊",
  "😉",
];
btn.addEventListener("mouseover", () => {
  btn.textContent = emoji[Math.floor(Math.random() * emoji.length)];
});
