//TASK 1 Move div
const divToMove = document.querySelector('.task1');
let counter = 0;
let moveIntervalId;
const initalPosition = divToMove.getBoundingClientRect().left;
const moveDiv = () => {
  moveIntervalId = setInterval(() => {
    counter += 1;
    divToMove.style.left = counter + '%';
    const currentPosition = divToMove.getBoundingClientRect().left + divToMove.clientWidth + initalPosition;
    console.log(divToMove.getBoundingClientRect());
    if (currentPosition >= window.innerWidth) {
      counter = 0;
    }
  }, 1000);
};

const stopDiv = () => clearInterval(moveIntervalId);

divToMove.addEventListener('click', moveDiv);
document.addEventListener('keydown', stopDiv);

//TASK 2 Magic div
const magicDiv = document.querySelector('.task2-div');
document.addEventListener('DOMContentLoaded', () => {
  magicDiv.classList.remove('hidden');
});

const magicLink = document.querySelector('.task2-link');

magicLink.onclick = (e) => {
  e.preventDefault();
  magicDiv.classList.toggle('hidden');
};

const buttonCancle = document.querySelector('.task2-button');
buttonCancle.addEventListener('click', (e) => {
  e.preventDefault();
  magicLink.onclick = false;
});

//TASK 3
const weekDays = ['Понеділок', 'Вівторок', 'Среда', 'Четверг', "П'ятниця", 'Субота', 'Неділя'];
const getCurrentDay = (weekDays) => {
  const today = new Date().getDay();
  let result = '';
  weekDays.forEach((day, index) => (index + 1 === today ? (result = `${day} мае номер ${index + 1}`) : ''));
  return result;
};

console.log(getCurrentDay(weekDays));
