const messages = [
  "🥺 I'm really sorry, {name}... Please don't be angry with me 👉👈 ❤️",
  "😭 I know you're upset, {name}... Can I have my smile back? 🥺❤️",
  "🥹 Sorry {name}... I promise I'll make it up to you 🫶",
  "👉👈 I messed up, {name}... Please forgive me? 🥺💕"
];

const faces = [
  "^--^",
  "(づ｡◕‿‿◕｡)づ",
  "(｡•́‿•̀｡)",
  "(っ˘̩╭╮˘̩)っ",
  "(｡♥‿♥｡)"
];

function sorry(name = "Baby") {
  const message =
    messages[Math.floor(Math.random() * messages.length)];

  const face =
    faces[Math.floor(Math.random() * faces.length)];

  return `${message.replace("{name}", name)}

${face} ❤️`;
}

module.exports = sorry;