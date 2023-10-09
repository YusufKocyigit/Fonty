document.addEventListener('DOMContentLoaded', function() {
  // Retrieve and update the state of font and whitelist checkboxes
  chrome.storage.sync.get(['applyFont', 'applyToWhitelisted', 'selectedFont'], function(result) {
    document.getElementById('fontCheckbox').checked = result.applyFont || false;
    document.getElementById('whitelistCheckbox').checked = result.applyToWhitelisted || false;
    
    // Set the selected font based on the stored value
    const selectedFont = result.selectedFont || 'arial';
    document.getElementById('fontSelect').value = selectedFont;
  });

  // Attach event listeners for checkbox changes
  document.getElementById('fontCheckbox').addEventListener('change', function() {
    const applyFont = this.checked;
    chrome.storage.sync.set({ applyFont });
  });

  document.getElementById('whitelistCheckbox').addEventListener('change', function() {
    const applyToWhitelisted = this.checked;
    chrome.storage.sync.set({ applyToWhitelisted });
  });

  // Handle font selection change
  document.getElementById('fontSelect').addEventListener('change', function() {
    const selectedFont = this.value;
    chrome.storage.sync.set({ selectedFont });
    // You may want to communicate with content.js to apply the selected font immediately
  });

  // ... rest of the code for other buttons
});
