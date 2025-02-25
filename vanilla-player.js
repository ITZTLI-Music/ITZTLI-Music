import albumData from './player-config.js';
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
    
    // Create player container
    const playerContainer = document.createElement('div');
    playerContainer.className = 'player-container';
    playerContainer.innerHTML = createPlayerTemplate(albumData);
    audioPlayerRoot.appendChild(playerContainer);
    
    // Get DOM elements
    const audioElement = document.getElementById('audio-element');
    const playButton = document.querySelector('.play-button');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const lyricsToggleButton = document.querySelector('.lyrics-toggle-button');
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.querySelector('.progress');
    const currentTimeDisplay = document.querySelector('.current-time');
    const songItems = document.querySelectorAll('.song-list li');
    const lyricsContainer = document.querySelector('.lyrics-container');
    const lyricsText = document.querySelector('.lyrics-text');
    
    let currentSongIndex = 0;
    let isPlaying = false;
    let lyricsVisible = true;

    // Update lyrics function
    function updateLyrics(index) {
        const lyrics = albumData.songs[index].lyrics || "Lyrics not available";
        lyricsText.innerHTML = lyrics.replace(/\n/g, '<br>'); // Handle line breaks properly
        
        if (lyricsVisible) {
            showLyrics();
        }
    }

    // Toggle lyrics visibility
    function toggleLyrics() {
        lyricsVisible = !lyricsVisible;
        
        if (lyricsVisible) {
            showLyrics();
            lyricsToggleButton.textContent = 'Hide Lyrics';
        } else {
            hideLyrics();
            lyricsToggleButton.textContent = 'Show Lyrics';
        }
    }

    // Show lyrics
    function showLyrics() {
        lyricsContainer.classList.add('visible');
    }

    // Hide lyrics
    function hideLyrics() {
        lyricsContainer.classList.remove('visible');
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
        } else {
            audioElement.play().catch(err => {
                console.error('Error playing audio:', err);
            });
            playButton.textContent = 'Pause';
            updateLyrics(currentSongIndex);
        }
        isPlaying = !isPlaying;
    }

    // Song selection function
    function selectSong(index) {
        currentSongIndex = index;
        
        // Update audio source
        audioElement.src = albumData.songs[index].src;
        
        // Update song title and duration
        document.querySelector('.current-song-title').textContent = albumData.songs[index].title;
        document.querySelector('.duration').textContent = albumData.songs[index].duration;
        
        // Update active song in list
        songItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        // Reset progress bar
        progress.style.width = '0%';
        currentTimeDisplay.textContent = '0:00';
        
        // Update lyrics
        updateLyrics(index);
        
        // If already playing, start the new song
        if (isPlaying) {
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
    
    // Song list selection
    songItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            selectSong(index);
            if (!isPlaying) {
                togglePlay();
            }
        });
    });

    // Initialize lyrics visibility
    if (lyricsVisible) {
        showLyrics();
    }
    
    // Initialize lyrics toggle button text
    lyricsToggleButton.textContent = lyricsVisible ? 'Hide Lyrics' : 'Show Lyrics';
    
    // Update the initial lyrics content
    updateLyrics(currentSongIndex);
});