// Add this to a new file called vanilla-player.js
document.addEventListener('DOMContentLoaded', () => {
  const audioPlayerRoot = document.getElementById('audio-player-root');
  
  if (!audioPlayerRoot) {
    console.error('Audio player root element not found!');
    return;
  }
  
  // Clear any existing content
  audioPlayerRoot.innerHTML = '';
  
  // Album data
  const albumData = {
    title: "ADELANTE",
    artwork: "./assets/images/album-art.png", // Update with your actual path
    songs: [
      { title: "DEUS EX MACHINA", src: "./assets/audio/DEUS EX MACHINA.mp3", duration: "2:07" },
      { title: "ADDRESSING MY INTENTIONS", src: "./assets/audio/ADDRESSING MY INTENTIONS.mp3", duration: "2:08" },
      { title: "ROAM FOREVER", src: "./assets/audio/ROAM FOREVER.mp3", duration: "1:55" },
	  { title: "MORAL PHILOSOPHY", src: "./assets/audio/MORAL PHILOSOPHY.mp3", duration: "3:26" },
      { title: "I COULD USE A THING OR TWO", src: "./assets/audio/I COULD USE A THING OR TWO.mp3", duration: "2:15" },
      { title: "ALL GAS NO BRAKES", src: "./assets/audio/ALL GAS NO BRAKES.mp3", duration: "2:21" },
      { title: "POLYPHASIC SLEEPING", src: "./assets/audio/POLYPHASIC SLEEPING.mp3", duration: "3:22" },
      { title: "RIVALROUS TACTICS", src: "./assets/audio/RIVALROUS TACTICS.mp3", duration: "2:11" },
      { title: "CHORIZO CON PAPAS", src: "./assets/audio/CHORIZO CON PAPAS.mp3", duration: "2:10" },
      { title: "COLLECTIVE COGNIZANCE", src: "./assets/audio/COLLECTIVE COGNIZANCE.mp3", duration: "3:58" },
      { title: "ROGUE MAGICIAN", src: "./assets/audio/ROGUE MAGICIAN.mp3", duration: "3:39" },
      { title: "FOREVER & ALWAYS", src: "./assets/audio/FOREVER & ALWAYS.mp3", duration: "3:52" },
      { title: "SEDITION OF THE ZEITGEIST", src: "./assets/audio/SEDITION OF THE ZEITGEIST.mp3", duration: "5:16" }
    ]
  };
  
  // Create player HTML
  const playerHTML = `
    <div class="vanilla-player">
      <div class="player-album-art">
        <img src="${albumData.artwork}" alt="${albumData.title}" onerror="this.src='https://via.placeholder.com/400'">
      </div>
      <div class="player-controls">
        <div class="song-info">
          <h3 class="current-song-title">${albumData.songs[0].title}</h3>
          <div class="time-display">
            <span class="current-time">0:00</span> / 
            <span class="duration">${albumData.songs[0].duration}</span>
          </div>
        </div>
        <div class="progress-bar">
          <div class="progress"></div>
        </div>
        <div class="control-buttons">
          <button class="prev-button">Previous</button>
          <button class="play-button">Play</button>
          <button class="next-button">Next</button>
        </div>
      </div>
      <div class="song-list">
        <h3>Songs</h3>
        <ul>
          ${albumData.songs.map((song, index) => `
            <li data-index="${index}" class="${index === 0 ? 'active' : ''}">
              <span class="song-title">${song.title}</span>
              <span class="song-duration">${song.duration}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <audio id="audio-element" src="${albumData.songs[0].src}"></audio>
    </div>
  `;
  
  // Add player to the DOM
  audioPlayerRoot.innerHTML = playerHTML;
  
  // Add additional CSS
  const style = document.createElement('style');
  style.textContent = `
    .vanilla-player {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: rgba(0, 0, 0, 0.7);
      border: 1px solid #fff;
      border-radius: 8px;
      overflow: hidden;
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
      gap: 20px;
    }
    
    .control-buttons button {
      background-color: #2ebd35;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
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
    }
    
    .song-list li {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #333;
      color: #fff;
      cursor: pointer;
    }
    
    .song-list li.active {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    .song-duration {
      color: #999;
    }
  `;
  document.head.appendChild(style);
  
  // Set up event listeners
  const audioElement = document.getElementById('audio-element');
  const playButton = document.querySelector('.play-button');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const progressBar = document.querySelector('.progress-bar');
  const progress = document.querySelector('.progress');
  const currentTimeDisplay = document.querySelector('.current-time');
  const songItems = document.querySelectorAll('.song-list li');
  
  let currentSongIndex = 0;
  let isPlaying = false;
  
  // Play/Pause function
  function togglePlay() {
    if (isPlaying) {
      audioElement.pause();
      playButton.textContent = 'Play';
    } else {
      audioElement.play().catch(err => {
        console.error('Error playing audio:', err);
        alert('Could not play audio. Check console for details.');
      });
      playButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
  }
  
  // Update song function
  function updateSong(index) {
    currentSongIndex = index;
    audioElement.src = albumData.songs[index].src;
    document.querySelector('.current-song-title').textContent = albumData.songs[index].title;
    document.querySelector('.duration').textContent = albumData.songs[index].duration;
    
    // Update active song in list
    songItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // Reset progress
    progress.style.width = '0%';
    currentTimeDisplay.textContent = '0:00';
    
    // Auto-play if was playing before
    if (isPlaying) {
      audioElement.play().catch(err => {
        console.error('Error playing audio:', err);
      });
    }
  }
  
  // Format time
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  }
  
  // Event listeners
  playButton.addEventListener('click', togglePlay);
  
  prevButton.addEventListener('click', () => {
    const newIndex = (currentSongIndex - 1 + albumData.songs.length) % albumData.songs.length;
    updateSong(newIndex);
  });
  
  nextButton.addEventListener('click', () => {
    const newIndex = (currentSongIndex + 1) % albumData.songs.length;
    updateSong(newIndex);
  });
  
  progressBar.addEventListener('click', (e) => {
    const percent = e.offsetX / progressBar.offsetWidth;
    audioElement.currentTime = percent * audioElement.duration;
  });
  
  audioElement.addEventListener('timeupdate', () => {
    const percent = (audioElement.currentTime / audioElement.duration) * 100;
    progress.style.width = `${percent}%`;
    currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
  });
  
  audioElement.addEventListener('ended', () => {
    const newIndex = (currentSongIndex + 1) % albumData.songs.length;
    updateSong(newIndex);
  });
  
  songItems.forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index);
      updateSong(index);
      if (!isPlaying) {
        togglePlay();
      }
    });
  });
  
  // Handle errors
  audioElement.addEventListener('error', (e) => {
    console.error('Audio error:', e);
    alert(`Could not load audio track: ${albumData.songs[currentSongIndex].title}`);
  });
  
  console.log('Vanilla player initialized');
});