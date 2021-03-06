// Code your solutions in this file

function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        array[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    }
    return array;
}

function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int--;
    }
}

