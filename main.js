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

  let { top } = ballCoords;
  let { left } = ballCoords;

  if (top < 0) top = 0;
  if (left < 0) left = 0;

  if (left + ball.clientWidth > field.clientWidth) {
    left = field.clientWidth - ball.clientWidth;
  }

  if (top + ball.clientHeight > field.clientHeight) {
    top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = `${left}px`;
  ball.style.top = `${top}px`;
})
