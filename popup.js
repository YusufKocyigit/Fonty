document.addEventListener("DOMContentLoaded", function () {
  const fontSelector = document.getElementById('fontSelector');
  const setDefaultFontButton = document.getElementById('setDefaultFont');

  // Load the default font from storage (if set)
  chrome.storage.sync.get(['defaultFont'], function (result) {
    if (result.defaultFont) {
      fontSelector.value = result.defaultFont;
      console.log(`Default font loaded: ${result.defaultFont}`);
    }
  });

  setDefaultFontButton.addEventListener('click', function () {
    const selectedFont = fontSelector.value;
    console.log(`Setting default font to: ${selectedFont}`);

    // Save the default font in storage
    chrome.storage.sync.set({ defaultFont: selectedFont }, function () {
      console.log(`Default font saved: ${selectedFont}`);
      // Send a message to apply the font directly to the page
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { font: selectedFont });
      });
    });
  });
});
