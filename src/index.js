const messages = [
    "Oscar",
    "Ana",
    "Camila",
    "Adrian",
    "Patricia",
    "Nicolas",
    "Diego",
    "Laura",
    "Andrea"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};
module.exports = { randomMsg };