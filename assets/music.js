document.addEventListener('DOMContentLoaded', () => {
    // Check if React and ReactDOM are available
    if (window.React && window.ReactDOM) {
        // Import the AudioPlayer component
        import('./components/AudioPlayer.jsx')
            .then(module => {
                const AudioPlayer = module.default;
                const container = document.getElementById('audio-player-root');
                if (container) {
                    const root = ReactDOM.createRoot(container);
                    root.render(React.createElement(AudioPlayer));
                } else {
                    console.error("Audio player container not found!");
                }
            })
            .catch(error => {
                console.error("Failed to load AudioPlayer component:", error);
            });
    } else {
        console.error("React or ReactDOM is not loaded!");
    }
});