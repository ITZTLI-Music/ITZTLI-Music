import React from 'react';
import { createRoot } from 'react-dom/client';
import AudioPlayer from './AudioPlayer';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('audio-player-root');
    const root = createRoot(container);
    root.render(<AudioPlayer />);
});