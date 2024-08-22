const hotNumbers = [34, 45, 13, 18, 38, 14, 43, 33, 20, 27, 17];
const luckyNumbers = [7, 11, 5, 31, 12, 30];

const line1 = document.querySelector('.numbers-1')
const line2 = document.querySelector('.numbers-2')
const line3 = document.querySelector('.numbers-3')
const line4 = document.querySelector('.numbers-4')
const line5 = document.querySelector('.numbers-5')
const line6 = document.querySelector('.numbers-6')
const line7 = document.querySelector('.numbers-7')
const line8 = document.querySelector('.numbers-8')
const line9 = document.querySelector('.numbers-9')
const line10 = document.querySelector('.numbers-10')
const lines = [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10];

const generateButton = document.querySelector('.numbers-button');

const randInt = (lo, hi) =>
  Math.floor(Math.random() * (hi - lo)) + lo;

const sample = a => a[randInt(0, a.length)];

const generate = () => {
  let nums = [sample(hotNumbers), sample(luckyNumbers)];
   while (nums.length < 6) {
    random = randInt(1, 46);
    if (!nums.includes(random)) {
      nums.push(random);
    }
  }
  return nums.sort((a, b) => a - b);
}

generateButton.addEventListener('click', function() {
  for (const line of lines) {
    line.innerText = generate();
  }
})