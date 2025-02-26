import albumData from './player-config.js';
import albumDataTwo from './player-config-two.js'; // New import for second album
import { playerStyles } from './player-styles.js';
import { createPlayerTemplate } from './player-template.js';

document.addEventListener('DOMContentLoaded', () => {
    const audioPlayerRoot = document.getElementById('audio-player-root');
    
    if (!audioPlayerRoot) {
        console.error('Audio player root element not found!');
        return;
    }
    
    // Create and add styles
    const styleElement = document.createElement('style');
    styleElement.textContent = playerStyles;
    document.head.appendChild(styleElement);
    
    // Create wrapper for both players
    const playersWrapper = document.createElement('div');
    playersWrapper.className = 'players-wrapper';
    audioPlayerRoot.appendChild(playersWrapper);
    
    // Create first player container
    const playerContainer1 = document.createElement('div');
    playerContainer1.className = 'player-container';
    playerContainer1.innerHTML = createPlayerTemplate(albumData, 'player-one');
    playersWrapper.appendChild(playerContainer1);
    
    // Create center lyrics display
    const centerLyricsDisplay = document.createElement('div');
    centerLyricsDisplay.className = 'lyrics-display-center';
    centerLyricsDisplay.innerHTML = `
      <h3>Song Lyrics</h3>
      <div class="center-lyrics-text"></div>
    `;
    // Insert lyrics display between the players
    playersWrapper.appendChild(centerLyricsDisplay);
    
    // Create second player container
    const playerContainer2 = document.createElement('div');
    playerContainer2.className = 'player-container';
    playerContainer2.innerHTML = createPlayerTemplate(albumDataTwo, 'player-two');
    playersWrapper.appendChild(playerContainer2);
    
    // Initialize both players
    initializePlayer('player-one', albumData);
    initializePlayer('player-two', albumDataTwo);
});

// Function to initialize a player with its specific elements and data
function initializePlayer(playerId, albumData) {
    console.log(`Initializing player: ${playerId}`);
    console.log(`Audio element found: ${audioElement ? 'Yes' : 'No'}`);
    console.log(`Play button found: ${playButton ? 'Yes' : 'No'}`);
    console.log(`Song items count: ${songItems.length}`);
    // Get DOM elements for this specific player
    const audioElement = document.getElementById(`audio-element-${playerId}`);
    const playButton = document.querySelector(`.play-button-${playerId}`);
    const prevButton = document.querySelector(`.prev-button-${playerId}`);
    const nextButton = document.querySelector(`.next-button-${playerId}`);
    const lyricsToggleButton = document.querySelector(`.lyrics-toggle-button-${playerId}`);
    const progressBar = document.querySelector(`.progress-bar-${playerId}`);
    const progress = document.querySelector(`.progress-${playerId}`);
    const currentTimeDisplay = document.querySelector(`.current-time-${playerId}`);
    const songItems = document.querySelectorAll(`.song-list-${playerId} li`);
    
    let currentSongIndex = 0;
    let isPlaying = false;

    // Toggle lyrics visibility
    function toggleLyrics() {
        const centerLyricsDisplay = document.querySelector('.lyrics-display-center');
        const playersWrapper = document.querySelector('.players-wrapper');
        
        if (centerLyricsDisplay.classList.contains('visible')) {
            centerLyricsDisplay.classList.remove('visible');
            playersWrapper.classList.remove('playing');
            lyricsToggleButton.textContent = 'Show Lyrics';
        } else {
            centerLyricsDisplay.classList.add('visible');
            playersWrapper.classList.add('playing');
            centerLyricsDisplay.querySelector('h3').textContent = albumData.songs[currentSongIndex].title;
            centerLyricsDisplay.querySelector('.center-lyrics-text').innerHTML = 
                albumData.songs[currentSongIndex].lyrics?.replace(/\n/g, '<br>') || 'Lyrics not available';
            lyricsToggleButton.textContent = 'Hide Lyrics';
        }
    }

    // Format time function for current time display
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Play/Pause function
    function togglePlay() {
        if (isPlaying) {
            audioElement.pause();
            playButton.textContent = 'Play';
            document.querySelector('.players-wrapper').classList.remove('playing');
            document.querySelector('.lyrics-display-center').classList.remove('visible');
            lyricsToggleButton.textContent = 'Show Lyrics';
        } else {
            // Pause any other playing audio elements
            document.querySelectorAll('audio').forEach(audio => {
                if (audio !== audioElement && !audio.paused) {
                    audio.pause();
                    // Find and update the corresponding play button
                    const otherPlayerId = audio.id.replace('audio-element-', '');
                    document.querySelector(`.play-button-${otherPlayerId}`).textContent = 'Play';
                }
            });
            
            audioElement.play().catch(err => {
                console.error(`Error playing audio for ${playerId}:`, err);
                console.log(`Audio source being played: ${audioElement.src}`);
                alert(`Error playing audio: ${err.message}`); // This will show the specific error
            });
            playButton.textContent = 'Pause';
            
            // Force reflow to ensure animation works
            void document.querySelector('.players-wrapper').offsetWidth;
            
            // Move players to sides and show center lyrics
            document.querySelector('.players-wrapper').classList.add('playing');
            
            // Update and show center lyrics
            const centerLyricsDisplay = document.querySelector('.lyrics-display-center');
            centerLyricsDisplay.querySelector('h3').textContent = albumData.songs[currentSongIndex].title;
            centerLyricsDisplay.querySelector('.center-lyrics-text').innerHTML = 
                albumData.songs[currentSongIndex].lyrics?.replace(/\n/g, '<br>') || 'Lyrics not available';
            
            // Force reflow before showing lyrics
            void centerLyricsDisplay.offsetWidth;
            centerLyricsDisplay.classList.add('visible');
            
            // Update the lyrics toggle button
            lyricsToggleButton.textContent = 'Hide Lyrics';
        }
        isPlaying = !isPlaying;
    }

    // Song selection function
    function selectSong(index) {
        currentSongIndex = index;
        
        // Update audio source
        audioElement.src = albumData.songs[index].src;
        
        // Update song title and duration
        document.querySelector(`.current-song-title-${playerId}`).textContent = albumData.songs[index].title;
        document.querySelector(`.duration-${playerId}`).textContent = albumData.songs[index].duration;
        
        // Update active song in list
        songItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        // Reset progress bar
        progress.style.width = '0%';
        currentTimeDisplay.textContent = '0:00';
        
        // Update lyrics
        const centerLyricsDisplay = document.querySelector('.lyrics-display-center');
        centerLyricsDisplay.querySelector('h3').textContent = albumData.songs[index].title;
        centerLyricsDisplay.querySelector('.center-lyrics-text').innerHTML = 
            albumData.songs[index].lyrics?.replace(/\n/g, '<br>') || 'Lyrics not available';
        
        // Automatically play the song when selected
        if (!isPlaying) {
            togglePlay();
        } else {
            // If already playing, just play the new song
            audioElement.play();
        }
    }

    // Event Listeners
    playButton.addEventListener('click', togglePlay);
    
    prevButton.addEventListener('click', () => {
        const newIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : albumData.songs.length - 1;
        selectSong(newIndex);
    });
    
    nextButton.addEventListener('click', () => {
        const newIndex = (currentSongIndex < albumData.songs.length - 1) ? currentSongIndex + 1 : 0;
        selectSong(newIndex);
    });
    
    // Update progress bar during playback
    audioElement.addEventListener('timeupdate', () => {
        if (audioElement.duration) {
            const percentage = (audioElement.currentTime / audioElement.duration) * 100;
            progress.style.width = `${percentage}%`;
            currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
        }
    });
    
    // Enable seeking by clicking on progress bar
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        audioElement.currentTime = pos * audioElement.duration;
    });
    
    // Handle song end
    audioElement.addEventListener('ended', () => {
        const newIndex = (currentSongIndex < albumData.songs.length - 1) ? currentSongIndex + 1 : 0;
        selectSong(newIndex);
        if (isPlaying) {
            audioElement.play();
        }
    });
    
    // Lyrics toggle
    lyricsToggleButton.addEventListener('click', toggleLyrics);
    
    // Replace the song list selection code with this more robust version
    console.log(`Setting up song item listeners for ${playerId} - ${songItems.length} items`);
    songItems.forEach((item, index) => {
        console.log(`Adding listener to song ${index}`);
        item.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(`Song ${index} clicked in ${playerId}`);
            selectSong(index);
        });
    });

    // Initialize lyrics toggle button text
    lyricsToggleButton.textContent = 'Show Lyrics';
}