// Listen for messages to change the font
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.font) {
    applyFont(message.font);
  }
});

function applyFont(font) {
  document.body.style.fontFamily = font;
  console.log(`Applying font: ${font}`);
}
