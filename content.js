// This script runs on web pages to change the font if enabled
console.log("Content script is running.");

chrome.storage.sync.get(['applyFont', 'selectedFont'], function(result) {
  if (result.applyFont) {
    const selectedFont = result.selectedFont || 'arial';
    console.log('Selected font:', selectedFont);

    // Check if this log message appears in the console
    console.log('Applying font:', selectedFont);

    // Apply the selected font here
    document.body.style.fontFamily = selectedFont === 'arial' ? 'Arial, sans-serif' : 'Roboto, sans-serif';
  }
});
