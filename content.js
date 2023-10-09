// Load the default font from storage (if set)
chrome.storage.sync.get(['defaultFont'], function (result) {
  if (result.defaultFont) {
    console.log(`Default font loaded: ${result.defaultFont}`);
    document.body.style.fontFamily = result.defaultFont;
  }
});

// Listen for messages to change the font
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.font) {
    console.log(`Changing font to: ${message.font}`);
    document.body.style.fontFamily = message.font;
  }
});
