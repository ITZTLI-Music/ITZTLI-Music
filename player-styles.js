export const playerStyles = `
  .players-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 10px; /* Reduced from 15px to 5px for much closer spacing */
    flex-wrap: nowrap;
    position: relative;
    transition: all 0.5s ease;
  }
  .players-wrapper.playing {
    justify-content: center; /* Changed from space-between */
    align-items: flex-start;
    position: relative;
  }

  .player-container {
    width: 100%;
    max-width: 500px; /* Increased from 450px to match original size */
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
    flex-shrink: 0; /* Prevent shrinking */
    flex-grow: 0; /* Prevent growing */
  }

  /* Enhance the transform for a more dramatic slide */
  .players-wrapper.playing .player-container:first-child {
    transform: translateX(-55%); /* Reduced from -20% for more even spacing */
  }

  .players-wrapper.playing .player-container:last-child {
    transform: translateX(55%); /* Reduced from 20% for more even spacing */
  }

  .lyrics-display-center {
    position: absolute; /* Set to absolute */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Adjust for center alignment */
    top: 0; /* Align at the top */    
    width: 100%;
    max-width: 500px;
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid #fff;
    border-radius: 8px;
    padding: 20px;
    color: #fff;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s;
    z-index: 10;
    height: 800px; /* Set a fixed height to match player height */
    overflow-y: auto; /* Add scrollbar for overflow content */
    margin: 0 auto;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .lyrics-display-center.visible {
    opacity: 1;
    visibility: visible;
  }

  .lyrics-display-center h3 {
    color: #2ebd35;
    margin-top: 0;
    text-align: center;
    font-size: 1.3em;
    white-space: nowrap; /* Prevent wrapping of title */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .lyrics-display-center .lyrics-text {
    line-height: 1.6;
    white-space: pre-wrap;
    margin-top: 15px;
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
      flex-wrap: wrap;
    }
    
    .players-wrapper.playing .player-container:first-child,
    .players-wrapper.playing .player-container:last-child {
      transform: translateX(0);
    }
    
    .lyrics-display-center {
      margin: 20px auto;
      order: 3; /* Make sure it appears after both players */
    }
  }

  @media (max-width: 550px) {
    .player-container {
      width: 100%;
    }
    
    .vanilla-player {
      width: 100%;
    }
    
    .lyrics-display-center {
      max-width: 100%;
    }
  }
`;
