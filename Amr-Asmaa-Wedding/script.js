const openInvitation = document.getElementById("openInvitation");
const openingScreen = document.getElementById("openingScreen");
const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");

const musicButton = document.getElementById("musicButton");
const weddingMusic = document.getElementById("weddingMusic");


// Open invitation
openInvitation.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(function () {

        openingScreen.classList.add("hide");
        invitation.classList.add("show");

        document.body.style.overflow = "auto";

        // This will work after adding the MP3 file
        weddingMusic.play()
            .then(function () {
                musicButton.classList.add("playing");
            })
            .catch(function () {
                console.log("No music file has been added yet.");
            });

    }, 1000);
});


// Play and pause music
musicButton.addEventListener("click", function () {

    if (weddingMusic.paused) {

        weddingMusic.play()
            .then(function () {
                musicButton.classList.add("playing");
            })
            .catch(function () {
                alert("Add your MP3 file inside the music folder first.");
            });

    } else {

        weddingMusic.pause();
        musicButton.classList.remove("playing");
    }
});


// Countdown
const weddingDate = new Date(
    "October 15, 2026 20:00:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);
