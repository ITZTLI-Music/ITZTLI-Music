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
        lyricsText.textContent = lyrics;
        
        if (lyricsVisible) {
            showLyrics();
        }
    }

    // Toggle lyrics visibility
    function toggleLyrics() {
        lyricsVisible = !lyricsVisible;
        
        if (lyricsVisible) {
            showLyrics();
            lyricsToggleButton.classList.add('active');
        } else {
            hideLyrics();
            lyricsToggleButton.classList.remove('active');
        }
    }

    // Show lyrics
    function showLyrics() {
        playerContainer.classList.add('show-lyrics');
        lyricsContainer.classList.add('visible');
    }

    // Hide lyrics
    function hideLyrics() {
        lyricsContainer.classList.remove('visible');
        playerContainer.classList.remove('show-lyrics');
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
        
        // Update lyrics if playing
        if (isPlaying) {
            updateLyrics(index);
        }
    }

    // Event Listeners
    playButton.addEventListener('click', togglePlay);
    
    prevButton.addEventListener('click', () => {
        const newIndex = Math.max(0, currentSongIndex - 1);
        selectSong(newIndex);
    });
    
    nextButton.addEventListener('click', () => {
        const newIndex = Math.min(albumData.songs.length - 1, currentSongIndex + 1);
        selectSong(newIndex);
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

    // Initialize lyrics toggle button
    lyricsToggleButton.classList.add('active');
});