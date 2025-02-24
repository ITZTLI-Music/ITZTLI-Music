// Lyrics data
const lyricsData = {
    song1: {
        title: "Song 1",
        content: "Lyrics for song 1 go here..."
    },
    song2: {
        title: "Song 2",
        content: "Lyrics for song 2 go here..."
    },
    song3: {
        title: "Song 3",
        content: "Lyrics for song 3 go here..."
    }
};

// Show lyrics when clicking a button
document.querySelectorAll(".lyrics-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const songKey = button.getAttribute("data-song");
        const lyricDisplay = document.getElementById("lyrics-display");
        
        // Update active button state
        document.querySelectorAll(".lyrics-btn").forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        
        // Update lyrics content
        document.getElementById("lyrics-title").innerText = lyricsData[songKey].title;
        document.getElementById("lyrics-content").innerText = lyricsData[songKey].content;
        
        // Show lyrics display with animation
        lyricDisplay.classList.remove("hidden");
        setTimeout(() => {
            lyricDisplay.classList.add("visible");
        }, 10);
    });
});

// Close lyrics display
function closeLyrics() {
    const lyricDisplay = document.getElementById("lyrics-display");
    lyricDisplay.classList.remove("visible");
    setTimeout(() => {
        lyricDisplay.classList.add("hidden");
    }, 300);
    
    // Remove active state from buttons
    document.querySelectorAll(".lyrics-btn").forEach(btn => {
        btn.classList.remove("active");
    });
}

// Simulated song detection (You'll need to integrate with Bandcamp's actual events)
function showLyricsButton(songIndex) {
    document.querySelectorAll(".lyrics-btn").forEach((button, index) => {
        button.style.opacity = "0";
        button.classList.remove("visible");
        
        if (index === songIndex) {
            setTimeout(() => {
                button.classList.add("visible");
            }, index * 100);
        }
    });
}

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Initialize first song lyrics button as visible
window.addEventListener('load', () => {
    showLyricsButton(0);
});