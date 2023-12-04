let alarm = 'rang'; // Assuming the initial state of the alarm is 'rang'
let volume = 5;

function snooze() {
    if (alarm === 'snoozed') {
        volume++; // Increase the volume
        console.log('The volume for the next alarm is increased');
        console.log(volume);
        if (alarm !== 'stopped') {
            snooze(); // Call itself if the alarm is not stopped
        }
    }
}

// Updated function call on button click
document.querySelector('button').addEventListener('click', function() {
    alarm = 'snoozed'; // Set alarm to 'snoozed' when the button is clicked
    snooze(); // Start the snooze process
});
