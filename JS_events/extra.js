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
