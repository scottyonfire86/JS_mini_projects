const array1 = ['The wise owl ', 'A mysterious traveler ', 'The cheerful sunflower ', 'An old book ', 'The curious cat ', 'A brave knight', 'The dancing moonlight ', 'A silent forest ', 'The ancient tree ', 'The wandering soul '];
const array2 = [' whispers a secret ', ' reveals a hidden path ', ' shares a timeless lesson ', ' sings a song of hope ', ' lights up the darkest night ', ' guards an ancient treasure ', ' shows the way forward ', ' paints the sky with dreams ', ' calls out to the stars ', ' embraces the unknown '];
const array3 = [' under the silver moon.', ' in the heart of the forest.', ' on a quiet winter\'s night.', ' beyond the horizon.', ' in the depths of the ocean.', ' as the sun rises.', ' in the shadow of the mountains.', ' with a gentle breeze.', ' as time stands still.', ' before the dawn breaks.'];

const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');
const message3 = document.getElementById('message3');

const button = document.getElementById('button');

const randomInt = () => {
    return Math.floor(Math.random() * 11);
}

button.addEventListener('click', function() {
    message1.innerText = array1[randomInt()];
    message2.innerText = array2[randomInt()];
    message3.innerText = array3[randomInt()];
});

