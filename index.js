const names = ["Gemma", "Jonah", "Nina", "Rob", "Ivan", "Juliet"];
const event = "graduation";

function writeCards(names, event) {
    const messages = [];

    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return messages;
}
console.log(writeCards(names, event));



function countDown() {
    let i = 10;

    while (i >= 0){
        console.log(i--);
        ;
    }

    return i;
}

countDown();
