// Add debugging to your vanilla-player.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('Vanilla player script loaded');
  
  const audioPlayerRoot = document.getElementById('audio-player-root');
  console.log('Audio player root found:', audioPlayerRoot);
  
  if (!audioPlayerRoot) {
    console.error('Audio player root element not found!');
    return;
  }
  
  // Clear any existing content
  audioPlayerRoot.innerHTML = '';
  console.log('Cleared audio player root content');
  
  // Create player container
  const playerContainer = document.createElement('div');
  playerContainer.className = 'player-container';
  audioPlayerRoot.appendChild(playerContainer);
  console.log('Created player container');
  
  try {
    // Create player HTML - this is the modified section with the lyrics toggle button
    const playerHTML = `
      <div class="vanilla-player">
        <div class="player-album-art">
          <img src="./assets/images/album-art.png" alt="ADELANTE" onerror="this.src='https://via.placeholder.com/400'">
        </div>
        <div class="player-controls">
          <div class="song-info">
            <h3 class="current-song-title">DEUS EX MACHINA</h3>
            <div class="time-display">
              <span class="current-time">0:00</span> / 
              <span class="duration">2:07</span>
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress"></div>
          </div>
          <div class="control-buttons">
            <button class="prev-button">Previous</button>
            <button class="play-button">Play</button>
            <button class="next-button">Next</button>
            <button class="lyrics-toggle-button">Lyrics</button>
          </div>
        </div>
        <div class="song-list">
          <h3>Songs</h3>
          <ul>
            <li data-index="0" class="active">
              <span class="song-title">DEUS EX MACHINA</span>
              <span class="song-duration">2:07</span>
            </li>
            <li data-index="1" class="">
              <span class="song-title">ADDRESSING MY INTENTIONS</span>
              <span class="song-duration">2:08</span>
            </li>
            <li data-index="2" class="">
              <span class="song-title">ROAM FOREVER</span>
              <span class="song-duration">1:55</span>
            </li>
            <!-- Add other songs similarly -->
          </ul>
        </div>
        <audio id="audio-element" src="./assets/audio/DEUS EX MACHINA.mp3"></audio>
      </div>
      <div class="lyrics-container">
        <div class="lyrics-content">
          <h3>Lyrics</h3>
          <div class="lyrics-text"></div>
        </div>
      </div>
    `;
    
    // Add player to the DOM
    playerContainer.innerHTML = playerHTML;
    console.log('Added player HTML to container');
    
    // Add basic CSS directly
    const style = document.createElement('style');
    style.textContent = `
      .player-container {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        gap: 30px;
        transition: all 0.5s ease;
      }
      
      .player-container.show-lyrics {
        justify-content: space-between;
      }
      
      .vanilla-player {
        width: 100%;
        max-width: 450px;
        background-color: rgba(0, 0, 0, 0.7);
        border: 1px solid #fff;
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.5s ease;
      }
      
      .player-album-art {
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        position: relative;
      }
      
      .player-album-art img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .player-controls {
        padding: 20px;
        border-top: 1px solid #333;
      }
      
      .song-info {
        margin-bottom: 15px;
        text-align: center;
      }
      
      .current-song-title {
        margin: 0 0 10px 0;
        color: #fff;
        font-size: 18px;
      }
      
      .time-display {
        color: #ccc;
        font-size: 14px;
      }
      
      .progress-bar {
        height: 4px;
        background-color: #333;
        margin: 15px 0;
        cursor: pointer;
        border-radius: 2px;
      }
      
      .progress {
        height: 100%;
        width: 0;
        background-color: #fff;
        border-radius: 2px;
      }
      
      .control-buttons {
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
      }
      
      .control-buttons button {
        background-color: #2ebd35;
        color: white;
        border: none;
        padding: 10px 12px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      
      .control-buttons button:hover {
        background-color: #249a2b;
      }
      
      .lyrics-toggle-button {
        background-color: #333 !important;
      }
      
      .lyrics-toggle-button.active {
        background-color: #2ebd35 !important;
      }
      
      .song-list {
        border-top: 1px solid #333;
        padding: 20px;
      }
      
      .song-list h3 {
        color: #fff;
        margin-top: 0;
      }
      
      .song-list ul {
        list-style: none;
        padding: 0;
        margin: 0;
        max-height: 300px;
        overflow-y: auto;
      }
      
      .song-list ul::-webkit-scrollbar {
        width: 5px;
      }
      
      .song-list ul::-webkit-scrollbar-track {
        background: #333;
      }
      
      .song-list ul::-webkit-scrollbar-thumb {
        background: #2ebd35;
      }
      
      .song-list li {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #333;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      
      .song-list li:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
      
      .song-list li.active {
        background-color: rgba(255, 255, 255, 0.1);
      }
      
      .song-duration {
        color: #999;
      }
      
      /* Lyrics Container */
      .lyrics-container {
        width: 100%;
        max-width: 450px;
        background-color: rgba(0, 0, 0, 0.7);
        border: 1px solid #fff;
        border-radius: 8px;
        overflow: hidden;
        height: 0;
        width: 0;
        opacity: 0;
        transition: all 0.5s ease;
        flex-shrink: 0;
      }
      
      .lyrics-container.visible {
        height: auto;
        width: 100%;
        max-width: 450px;
        opacity: 1;
      }
      
      .lyrics-content {
        padding: 20px;
        color: #fff;
      }
      
      .lyrics-content h3 {
        margin-top: 0;
        text-align: center;
        margin-bottom: 15px;
        color: #2ebd35;
      }
      
      .lyrics-text {
        white-space: pre-line;
        line-height: 1.6;
        overflow-y: auto;
        max-height: 300px;
        padding-right: 10px;
      }
      
      .lyrics-text::-webkit-scrollbar {
        width: 5px;
      }
      
      .lyrics-text::-webkit-scrollbar-track {
        background: #333;
      }
      
      .lyrics-text::-webkit-scrollbar-thumb {
        background: #2ebd35;
      }
      
      /* Responsive Adjustments */
      @media (max-width: 960px) {
        .player-container {
          flex-direction: column;
          align-items: center;
        }
        
        .player-container.show-lyrics {
          justify-content: center;
        }
        
        .lyrics-container.visible {
          margin-top: 30px;
        }
      }
    `;
    
    document.head.appendChild(style);
    console.log('Added CSS styles');
    
    // Get DOM elements
    console.log('Getting DOM elements...');
    const audioElement = document.getElementById('audio-element');
    console.log('Audio element:', audioElement);
    
    const playButton = document.querySelector('.play-button');
    console.log('Play button:', playButton);
    
    const prevButton = document.querySelector('.prev-button');
    console.log('Previous button:', prevButton);
    
    const nextButton = document.querySelector('.next-button');
    console.log('Next button:', nextButton);
    
    const lyricsToggleButton = document.querySelector('.lyrics-toggle-button');
    console.log('Lyrics toggle button:', lyricsToggleButton);
    
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.querySelector('.progress');
    const currentTimeDisplay = document.querySelector('.current-time');
    const songItems = document.querySelectorAll('.song-list li');
    const lyricsContainer = document.querySelector('.lyrics-container');
    const lyricsText = document.querySelector('.lyrics-text');
    const playerContainer = document.querySelector('.player-container');
    
    if (!lyricsToggleButton) {
      console.error('Lyrics toggle button not found!');
      return;
    }
    
    let currentSongIndex = 0;
    let isPlaying = false;
    let lyricsVisible = true; // Default to showing lyrics
    
    // Simple lyrics data for testing
    const lyricsData = [
      "This is sample lyrics for the first song...",
      "This is sample lyrics for the second song...",
      "This is sample lyrics for the third song..."
    ];
    
    // Function to update lyrics
    function updateLyrics(index) {
      console.log('Updating lyrics for song index:', index);
      const lyrics = lyricsData[index] || "Lyrics not available";
      lyricsText.textContent = lyrics;
      
      // Show lyrics container with animation only if toggled on
      if (lyricsVisible) {
        showLyrics();
      }
    }
    
    // Function to toggle lyrics visibility
    function toggleLyrics() {
      console.log('Toggling lyrics visibility');
      lyricsVisible = !lyricsVisible;
      
      if (lyricsVisible) {
        showLyrics();
        lyricsToggleButton.classList.add('active');
      } else {
        hideLyrics();
        lyricsToggleButton.classList.remove('active');
      }
    }
    
    // Function to show lyrics
    function showLyrics() {
      console.log('Showing lyrics');
      playerContainer.classList.add('show-lyrics');
      lyricsContainer.classList.add('visible');
    }
    
    // Function to hide lyrics
    function hideLyrics() {
      console.log('Hiding lyrics');
      playerContainer.classList.remove('show-lyrics');
      lyricsContainer.classList.remove('visible');
    }
    
    // Play/Pause function
    function togglePlay() {
      console.log('Toggle play/pause');
      if (isPlaying) {
        audioElement.pause();
        playButton.textContent = 'Play';
      } else {
        audioElement.play().catch(err => {
          console.error('Error playing audio:', err);
          alert('Could not play audio. Check console for details.');
        });
        playButton.textContent = 'Pause';
        
        // Show lyrics when playing
        updateLyrics(currentSongIndex);
      }
      isPlaying = !isPlaying;
    }
    
    // Basic song selection
    function selectSong(index) {
      console.log('Selecting song index:', index);
      currentSongIndex = index;
      
      // Update UI to reflect selected song
      songItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
      
      // If playing, update lyrics
      if (isPlaying) {
        updateLyrics(index);
      }
    }
    
    // Set up event listeners
    console.log('Setting up event listeners');
    
    // Play/pause button
    playButton.addEventListener('click', () => {
      console.log('Play button clicked');
      togglePlay();
    });
    
    // Previous button
    prevButton.addEventListener('click', () => {
      console.log('Previous button clicked');
      const newIndex = Math.max(0, currentSongIndex - 1);
      selectSong(newIndex);
    });
    
    // Next button
    nextButton.addEventListener('click', () => {
      console.log('Next button clicked');
      const newIndex = Math.min(songItems.length - 1, currentSongIndex + 1);
      selectSong(newIndex);
    });
    
    // Lyrics toggle button
    lyricsToggleButton.addEventListener('click', () => {
      console.log('Lyrics toggle button clicked');
      toggleLyrics();
    });
    
    // Song selection
    songItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        console.log('Song item clicked:', index);
        selectSong(index);
      });
    });
    
    // Set initial state - lyrics toggle button active by default
    lyricsToggleButton.classList.add('active');
    console.log('Initialized lyrics toggle button');
    
    console.log('Player setup complete');
  } catch (error) {
    console.error('Error setting up player:', error);
  }
});