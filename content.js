chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.font) {
      document.body.style.fontFamily = message.font;
    }
  });
  