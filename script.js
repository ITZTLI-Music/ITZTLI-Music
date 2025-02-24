// Toggle Lyrics Section
function toggleLyrics() {
    var lyrics = document.getElementById("lyrics-content");
    lyrics.classList.toggle("hidden");
}

// Contact Form Submission (Fake Handler)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-response").innerText = "Message sent! I'll get back to you soon.";
});

// Lyrics data (Replace with your actual lyrics)
const lyricsData = {
    song1: "Lyrics for song 1 go here...",
    song2: "Lyrics for song 2 go here...",
    song3: "Lyrics for song 3 go here..."
};

// Show lyrics when clicking a button
document.querySelectorAll(".lyrics-btn").forEach(button => {
    button.addEventListener("click", () => {
        const songKey = button.getAttribute("data-song");
        document.getElementById("lyrics-content").innerText = lyricsData[songKey] || "Lyrics not available.";
        document.getElementById("lyrics-display").classList.remove("hidden");
    });
});

// Close lyrics display
function closeLyrics() {
    document.getElementById("lyrics-display").classList.add("hidden");
}

// Simulated song detection (Bandcamp doesn’t provide an API for real tracking)
function showLyricsButton(songIndex) {
    document.querySelectorAll(".lyrics-btn").forEach((button, index) => {
        button.style.display = index === songIndex ? "block" : "none";
    });
}

// Simulated Bandcamp interaction (You can manually trigger the buttons when playing)
document.getElementById("bandcamp-player").addEventListener("mouseenter", function () {
    showLyricsButton(0); // Simulating Song 1 starting
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});