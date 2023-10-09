// Function to apply the font
function applyFont(font) {
  
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, body, span, button, input, select, textarea, div, yt-formatted-string');
  headings.forEach(function (heading) {
    heading.style.fontFamily = font;
  });

  console.log(`Applying font "${font}".`);

}

// Load the default font from storage (if set) and apply it on page load
chrome.storage.sync.get(['defaultFont'], function (result) {
  if (result.defaultFont) {
    applyFont(result.defaultFont);
    console.log(`Default font loaded: ${result.defaultFont}`);

    for (let i = 1; i <= 5; i++) {
      for (let z = 1; z <= 3; z++) {
      
      setTimeout(function () {
        applyFont(result.defaultFont);
        console.log(`Reapplying font: ${selectedFont}.`);
      }, 1000); 
        console.log(`Iteration ${i}`);
      }
    }
    
     

   

    
  }

  

});

// Listen for messages to change the font
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.font) {
    applyFont(message.font);
  }
});
