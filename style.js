function displayTime(time) {
    if (time < 0) {
        time = 0;
    }
    return time < 10 ? `0${time}` : time;
}

// Get the necessary HTML elements
const daysElement = document.querySelector('.time.days .number');
const hoursElement = document.querySelector('.time.hours .number');
const minutesElement = document.querySelector('.time.minutes .number');
const secondsElement = document.querySelector('.time.seconds .number');

// Calculate the countdown time
const countDownDate = new Date('May 24, 2023 12:10:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the remaining days, hours, minutes, and seconds on the interface
    daysElement.textContent = displayTime(days);
    hoursElement.textContent = displayTime(hours);
    minutesElement.textContent = displayTime(minutes);
    secondsElement.textContent = displayTime(seconds);

    // Check if the countdown has finished, stop the countdown
    if (distance < 0) {
        clearInterval(countdown);
        // Display a notification or perform other actions after the countdown finishes
        console.log("Countdown has ended");
    }
}, 1000);
