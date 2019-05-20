const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.addEventListener('click', (event) => {
  const fieldCoords = field.getBoundingClientRect();
  const fieldInnerCoords = {
    top: fieldCoords.top + field.clientTop,
    left: fieldCoords.left + field.clientLeft
  };
  const ballCoords = {
    top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
    left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
  };

  if (ballCoords.top < 0) ballCoords.top = 0;
  if (ballCoords.left < 0) ballCoords.left = 0;

  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
})