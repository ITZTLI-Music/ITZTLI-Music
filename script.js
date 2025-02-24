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
