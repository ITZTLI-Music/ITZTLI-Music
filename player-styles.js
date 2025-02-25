export const playerStyles = `
  .players-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
  
  .player-container {
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .vanilla-player {
    width: 100%;
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
    padding: 15px;
    border-top: 1px solid #333;
  }
  
  .song-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    color: #fff;
  }
  
  [class^="current-song-title"] {
    margin: 0;
    font-size: 1.1em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 70%;
  }
  
  .time-display {
    font-size: 0.9em;
    color: #ccc;
  }
  
  [class^="progress-bar"] {
    height: 6px;
    background-color: #333;
    border-radius: 3px;
    margin: 10px 0;
    cursor: pointer;
    position: relative;
  }
  
  [class^="progress"] {
    height: 100%;
    background-color: #2ebd35;
    border-radius: 3px;
    width: 0;
    transition: width 0.1s linear;
  }
  
  .control-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 10px;
  }
  
  .control-buttons button {
    flex: 1;
    padding: 6px 0;
    font-size: 0.9em;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid #444;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .control-buttons button:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  [class^="song-list"] {
    border-top: 1px solid #333;
    padding: 15px;
    max-height: 250px;
    overflow-y: auto;
  }
  
  [class^="song-list"] h3 {
    color: #fff;
    margin-top: 0;
    margin-bottom: 10px;
    text-align: center;
    font-size: 1.2em;
  }
  
  [class^="song-list"] ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  [class^="song-list"] li {
    display: flex;
    justify-content: space-between;
    padding: 8px 10px;
    border-bottom: 1px solid #333;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 0.9em;
  }
  
  [class^="song-list"] li:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  [class^="song-list"] li.active {
    background-color: rgba(46, 189, 53, 0.2);
    border-left: 3px solid #2ebd35;
  }
  
  [class^="lyrics-container"] {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid #fff;
    border-radius: 8px;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    display: none;
    margin-top: 20px;
  }
  
  [class^="lyrics-container"].visible {
    opacity: 1;
    transform: translateY(0);
    display: block;
  }
  
  .lyrics-content {
    padding: 20px;
    color: #fff;
    max-height: 300px;
    overflow-y: auto;
  }
  
  .lyrics-content h3 {
    margin-top: 0;
    color: #2ebd35;
  }
  
  [class^="lyrics-text"] {
    line-height: 1.6;
    white-space: pre-wrap;
  }
  
  /* Responsive adjustments */
  @media (max-width: 950px) {
    .players-wrapper {
      flex-direction: column;
      align-items: center;
    }
    
    .player-container {
      max-width: 500px;
    }
  }
  
  @media (max-width: 550px) {
    .player-container {
      width: 100%;
    }
    
    .vanilla-player,
    [class^="lyrics-container"] {
      width: 100%;
    }
  }
`;