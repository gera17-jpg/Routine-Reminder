let alarm = 'stopped';
let volume = 5;

function snoozed() {
    while (alarm === 'rang') {
        volume++; // Increase the volume
        console.log('The volume for the next alarm is Increased');
        console.log(volume);
        
        // Add a condition to break the loop when desired
        if (volume >= 10) {
            alarm = 'stopped'; // Reset alarm status to stop the loop
            break; // Exit the loop
        }
    }
}
