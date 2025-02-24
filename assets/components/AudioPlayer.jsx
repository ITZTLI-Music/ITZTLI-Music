import React, { useState, useRef, useEffect } from 'react';

// Define Lucide-like components if you don't have the actual library
const Play = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const Pause = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>
);

const SkipBack = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="19 20 9 12 19 4 19 20"></polygon>
    <line x1="5" y1="19" x2="5" y2="5"></line>
  </svg>
);

const SkipForward = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 4 15 12 5 20 5 4"></polygon>
    <line x1="19" y1="5" x2="19" y2="19"></line>
  </svg>
);

const Volume2 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

const VolumeX = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="9" x2="17" y2="15"></line>
    <line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>
);

const albumData = {
  title: "ADELANTE",
  artwork: "/assets/images/album-art.png", // Path to your album art
  songs: [
    { title: "DEUS EX MACHINA", src: "/assets/audio/DEUS EX MACHINA.mp3", duration: "2:07" },
    { title: "ADDRESSING MY INTENTIONS", src: "/assets/audio/ADDRESSING MY INTENTIONS.mp3", duration: "2:08" },
    { title: "ROAM FOREVER", src: "/assets/audio/ROAM FOREVER.mp3", duration: "1:55" },
    { title: "MORAL PHILOSOPHY", src: "/assets/audio/MORAL PHILOSOPHY.mp3", duration: "3:26" },
    { title: "I COULD USE A THING OR TWO", src: "/assets/audio/I COULD USE A THING OR TWO.mp3", duration: "2:15" },
    { title: "ALL GAS NO BRAKES", src: "/assets/audio/ALL GAS NO BRAKES.mp3", duration: "2:21" },
    { title: "POLYPHASIC SLEEPING", src: "/assets/audio/POLYPHASIC SLEEPING.mp3", duration: "3:22" },
    { title: "RIVALROUS TACTICS", src: "/assets/audio/RIVALROUS TACTICS.mp3", duration: "2:11" },
    { title: "CHORIZO CON PAPAS", src: "/assets/audio/CHORIZO CON PAPAS.mp3", duration: "2:10" },
    { title: "COLLECTIVE COGNIZANCE", src: "/assets/audio/COLLECTIVE COGNIZANCE.mp3", duration: "3:58" },
    { title: "ROGUE MAGICIAN", src: "/assets/audio/ROGUE MAGICIAN.mp3", duration: "3:39" },
    { title: "FOREVER & ALWAYS", src: "/assets/audio/FOREVER & ALWAYS.mp3", duration: "3:52" },
    { title: "SEDITION OF THE ZEITGEIST", src: "/assets/audio/SEDITION OF THE ZEITGEIST.mp3", duration: "5:16" }
  ]
};

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleLoadedMetadata = () => setDuration(audio.duration);
      const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
      const handleEnded = () => handleNext();
      
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('ended', handleEnded);
      
      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentSong]);

  // Update muted state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % albumData.songs.length);
    if (isPlaying) {
      // Add small timeout to allow state to update before playing
      setTimeout(() => {
        audioRef.current?.play().catch(error => {
          console.error("Error playing next track:", error);
        });
      }, 50);
    }
  };

  const handlePrevious = () => {
    setCurrentSong((prev) => (prev - 1 + albumData.songs.length) % albumData.songs.length);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current?.play().catch(error => {
          console.error("Error playing previous track:", error);
        });
      }, 50);
    }
  };

  const handleSongSelect = (index) => {
    setCurrentSong(index);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current?.play().catch(error => {
        console.error("Error playing selected track:", error);
      });
    }, 50);
  };

  const handleTimeUpdate = (e) => {
    const clickPosition = e.nativeEvent.offsetX / e.target.offsetWidth;
    const newTime = clickPosition * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Inline CSS since we're not using Tailwind CSS classes
  const styles = {
    container: "width: 100%; max-width: 600px; margin: 0 auto; background-color: rgba(0, 0, 0, 0.7); border: 1px solid #fff; border-radius: 8px; overflow: hidden;",
    imgContainer: "width: 100%; position: relative; padding-top: 100%;", // Aspect ratio 1:1
    img: "position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;",
    controlsContainer: "padding: 20px; border-top: 1px solid #333;",
    progressContainer: "height: 4px; width: 100%; background-color: #333; border-radius: 4px; margin-bottom: 16px; cursor: pointer;",
    progressBar: "height: 100%; background-color: #fff; border-radius: 4px;",
    timeDisplay: "display: flex; justify-content: space-between; font-size: 0.9em; color: #fff; margin-bottom: 16px;",
    songTitle: "text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding: 0 10px; flex-grow: 1;",
    buttonContainer: "display: flex; align-items: center; justify-content: center; gap: 24px; margin-bottom: 24px;",
    iconButton: "color: #fff; background: none; border: none; cursor: pointer;",
    playButton: "background-color: #fff; color: #000; padding: 16px; border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer;",
    songList: "border-top: 1px solid #333;",
    songButton: "width: 100%; padding: 12px 24px; text-align: left; background: none; border: none; color: #fff; cursor: pointer; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #333;",
    activeSong: "background-color: rgba(255, 255, 255, 0.1);",
    songDuration: "color: #999;"
  };

  return (
    <div style={{width: '100%', maxWidth: '600px', margin: '0 auto', backgroundColor: 'rgba(0, 0, 0, 0.7)', border: '1px solid #fff', borderRadius: '8px', overflow: 'hidden'}}>
      <audio
        ref={audioRef}
        src={albumData.songs[currentSong].src}
        style={{display: 'none'}}
      />
      
      {/* Album Art */}
      <div style={{width: '100%', position: 'relative', paddingTop: '100%'}}>
        <img 
          src={albumData.artwork || "/api/placeholder/400/400"} 
          alt={albumData.title}
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/api/placeholder/400/400";
          }}
        />
      </div>
      
      {/* Player Controls */}
      <div style={{padding: '20px', borderTop: '1px solid #333'}}>
        {/* Progress Bar */}
        <div 
          style={{height: '4px', width: '100%', backgroundColor: '#333', borderRadius: '4px', marginBottom: '16px', cursor: 'pointer'}}
          onClick={handleTimeUpdate}
        >
          <div 
            style={{height: '100%', width: `${(currentTime / duration) * 100}%`, backgroundColor: '#fff', borderRadius: '4px'}}
          />
        </div>
        
        {/* Time and Title */}
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.9em', color: '#fff', marginBottom: '16px'}}>
          <span>{formatTime(currentTime)}</span>
          <span style={{textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', padding: '0 10px', flexGrow: 1}}>
            {albumData.songs[currentSong].title}
          </span>
          <span>{formatTime(duration)}</span>
        </div>
        
        {/* Controls */}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginBottom: '24px'}}>
          <button 
            onClick={handlePrevious}
            style={{color: '#fff', background: 'none', border: 'none', cursor: 'pointer'}}
          >
            <SkipBack size={24} />
          </button>
          
          <button 
            onClick={handlePlayPause}
            style={{backgroundColor: '#fff', color: '#000', padding: '16px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: 'none'}}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          
          <button 
            onClick={handleNext}
            style={{color: '#fff', background: 'none', border: 'none', cursor: 'pointer'}}
          >
            <SkipForward size={24} />
          </button>
          
          <button 
            onClick={() => setIsMuted(!isMuted)}
            style={{color: '#fff', background: 'none', border: 'none', cursor: 'pointer'}}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>
      </div>
      
      {/* Song List */}
      <div style={{borderTop: '1px solid #333'}}>
        {albumData.songs.map((song, index) => (
          <button
            key={index}
            onClick={() => handleSongSelect(index)}
            style={{
              width: '100%',
              padding: '12px 24px',
              textAlign: 'left',
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #333',
              backgroundColor: currentSong === index ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
            }}
          >
            <span style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{song.title}</span>
            <span style={{color: '#999'}}>{song.duration}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AudioPlayer;