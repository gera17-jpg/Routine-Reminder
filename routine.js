let alarmStatus = 'notRinging';
let volume = 5;
let snoozeTimeout; // To store the timeout ID
let audio;

function startAlarm() {
    alarmStatus = 'ringing';
    alarm();
}

function checkAlarm() {
    setInterval(() => {
        const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
        //if (currentTime === '05:30:00') {
        if (alarmStatus === 'snoozed'){
            alarm();
        }
    }, 1000); // Check every second
}

function alarm() {
    if (alarmStatus === 'ringing') {
        audio = new Audio('Why So Lonely.mp3');
        audio.play();
    }
}

function snooze() {
    let alarmStatus='snoozed'

    if (alarmStatus === 'snoozed') {
        volume++;
        console.log('The volume for the next alarm is increased:', volume);
            // Logic for snooze: Stop the current alarm and set a new one after 5 minutes
        clearTimeout(snoozeTimeout); // Clear any existing timeout
        snoozeTimeout = setTimeout(alarm, 5 * 60 * 1000); // Snooze for 5 minutes (5 * 60 * 1000 milliseconds)
    }
}

function stop() {
    if (alarmStatus === 'ringing') {
        if (audio) {
            audio.pause();
        } // Pause the audio playback if it's active
        console.log("Good morning, it's time to start the day!");
        alarmStatus = 'stopped';
        }
    }