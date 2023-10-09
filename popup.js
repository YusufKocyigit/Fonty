const fontSelector = document.getElementById('fontSelector');
const setDefaultFontButton = document.getElementById('setDefaultFont');

// Load the default font from storage (if set)
chrome.storage.sync.get(['defaultFont'], function (result) {
  if (result.defaultFont) {
    fontSelector.value = result.defaultFont;
  }
});

setDefaultFontButton.addEventListener('click', function () {
  const selectedFont = fontSelector.value;

  // Save the default font in storage
  chrome.storage.sync.set({ defaultFont: selectedFont }, function () {
    // Reload the active tab to apply the default font
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      if (activeTab) {
        chrome.tabs.reload(activeTab.id);
      }
    });
  });
});
