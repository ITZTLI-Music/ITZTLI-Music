export const playerStyles = `
  .player-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: flex-start;
  }
  
  .vanilla-player {
    width: 500px;
    min-width: 500px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
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
  
  .song-list {
    flex: 1;
    border-top: 1px solid #333;
    padding: 20px;
    overflow-y: auto;
    max-height: 350px;
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
    transition: background-color 0.3s ease;
  }
  
  .song-list li:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .song-list li.active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .lyrics-container {
    width: 500px;
    min-width: 500px;
    max-width: 500px;
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid #fff;
    border-radius: 8px;
    overflow: hidden;
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    display: none;
  }
  
  .lyrics-container.visible {
    opacity: 1;
    transform: translateX(0);
    display: block;
  }
  
  .lyrics-content {
    padding: 20px;
    color: #fff;
    height: 350px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
`;