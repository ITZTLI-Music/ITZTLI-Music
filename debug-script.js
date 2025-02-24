// Add this script at the end of your index.html file or in a separate debug.js file
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
  
  // Check if audio player container exists
  const audioPlayerRoot = document.getElementById('audio-player-root');
  console.log('Audio player root element:', audioPlayerRoot);
  
  // Check if React is loaded
  console.log('React loaded:', typeof React !== 'undefined');
  console.log('ReactDOM loaded:', typeof ReactDOM !== 'undefined');
  
  // Check for any errors on the page
  const errors = [];
  window.addEventListener('error', (event) => {
    errors.push({
      message: event.message,
      source: event.filename,
      line: event.lineno,
      column: event.colno
    });
    console.error('Page error:', event);
  });
  
  // Display debug info on the page
  setTimeout(() => {
    if (audioPlayerRoot && audioPlayerRoot.children.length === 0) {
      // Create debug panel
      const debugPanel = document.createElement('div');
      debugPanel.style.backgroundColor = 'rgba(0,0,0,0.8)';
      debugPanel.style.color = 'white';
      debugPanel.style.padding = '20px';
      debugPanel.style.margin = '20px auto';
      debugPanel.style.maxWidth = '800px';
      debugPanel.style.border = '1px solid red';
      debugPanel.style.borderRadius = '5px';
      
      debugPanel.innerHTML = `
        <h3>Audio Player Debug Info</h3>
        <p>React loaded: ${typeof React !== 'undefined'}</p>
        <p>ReactDOM loaded: ${typeof ReactDOM !== 'undefined'}</p>
        <p>Errors detected: ${errors.length}</p>
        ${errors.length > 0 ? '<ul>' + errors.map(err => `<li>${err.message} (${err.source}:${err.line})</li>`).join('') + '</ul>' : ''}
      `;
      
      audioPlayerRoot.appendChild(debugPanel);
    }
  }, 2000); // Wait 2 seconds to check
});