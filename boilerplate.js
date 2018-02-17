// Boilerplate functions
function randNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomColor() {
    var color = '#'; // hexadecimal starting symbol
    var letters = ['D50000', 'C51162', 'AA00FF', '00BFA5', 'FF6D00', 'DD2C00', '263238', '000000']; // list of possible numbers
    color += letters[randNum(0, 8)];
    return color;
}