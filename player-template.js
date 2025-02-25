export const createPlayerTemplate = (albumData) => `
    <div class="vanilla-player">
        <div class="player-album-art">
            <img src="${albumData.artwork}" alt="${albumData.title}">
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
                <button class="lyrics-toggle-button">Show Lyrics</button>
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
    <div class="lyrics-container">
        <div class="lyrics-content">
            <h3>Lyrics</h3>
            <div class="lyrics-text">${albumData.songs[0].lyrics?.replace(/\n/g, '<br>') || 'Lyrics not available'}</div>
        </div>
    </div>
`;