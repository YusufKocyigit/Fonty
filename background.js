// Background script for managing whitelist and background tasks

// Initialize the whitelist (you may use chrome.storage.sync to store the whitelist)
const whitelist = [];

// Listen for messages from popup.js or content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'addToWhitelist') {
    // Logic to add a domain to the whitelist
  } else if (request.action === 'removeFromWhitelist') {
    // Logic to remove a domain from the whitelist
  } else if (request.action === 'resetFont') {
    // Logic to reset the font to the original
  }
});

// You can implement functions for adding/removing domains from the whitelist and resetting the font here
