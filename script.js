// Bestie's Birthday: 10 February 2027 at 12:00 AM
const birthday = new Date(2027, 1, 10, 0, 0, 0).getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const difference = birthday - now;

    // If birthday has arrived
    if (difference <= 0) {

        document.getElementById("countdownPage").classList.add("hidden");
        document.getElementById("surprisePage").classList.remove("hidden");

        return;
    }

    // Calculate remaining time
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    // Put numbers on screen
    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// Run immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);


// Open birthday surprise
const openButton = document.getElementById("openButton");

if (openButton) {
    openButton.addEventListener("click", function () {

        document.getElementById("surprisePage").classList.add("hidden");

        document.getElementById("birthdayPage").classList.remove("hidden");

    });
}