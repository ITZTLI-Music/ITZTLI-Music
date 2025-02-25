export const createPlayerTemplate = (albumData, playerId) => `
    <div class="vanilla-player">
        <div class="player-album-art">
            <img src="${albumData.artwork}" alt="${albumData.title}">
        </div>
        <div class="player-controls">
            <div class="song-info">
                <h3 class="current-song-title-${playerId}">${albumData.songs[0].title}</h3>
                <div class="time-display">
                    <span class="current-time-${playerId}">0:00</span> / 
                    <span class="duration-${playerId}">${albumData.songs[0].duration}</span>
                </div>
            </div>
            <div class="progress-bar-${playerId} progress-bar">
                <div class="progress-${playerId} progress"></div>
            </div>
            <div class="control-buttons">
                <button class="prev-button-${playerId}">Previous</button>
                <button class="play-button-${playerId}">Play</button>
                <button class="next-button-${playerId}">Next</button>
                <button class="lyrics-toggle-button-${playerId}">Show Lyrics</button>
            </div>
        </div>
        <div class="song-list-${playerId} song-list">
            <h3>${albumData.title}</h3>
            <ul>
                ${albumData.songs.map((song, index) => `
                    <li data-index="${index}" class="${index === 0 ? 'active' : ''}">
                        <span class="song-title">${song.title}</span>
                        <span class="song-duration">${song.duration}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        <audio id="audio-element-${playerId}" src="${albumData.songs[0].src}"></audio>
    </div>
`;