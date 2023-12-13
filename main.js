const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");
const container = document.querySelector(".container");
const title = document.querySelector(".title");

const moveButtonTo = (x, y) => {
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
};

const handleNoButton = () => {
  const { innerWidth, innerHeight } = window;

  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  let randomHeight = Math.trunc(Math.random() * innerHeight);
  let randomWidth = Math.trunc(Math.random() * innerWidth);

  const buttonIsCollideInRight = innerWidth - randomWidth < buttonWidth;
  const buttonIsCollideInBottom = innerHeight - randomHeight < buttonHeight;

  noButton.style.position = "absolute";

  if (buttonIsCollideInRight) {
    randomWidth -= buttonWidth;
  }

  if (buttonIsCollideInBottom) {
    randomHeight -= buttonHeight;
  }

  moveButtonTo(randomWidth, randomHeight);
};

noButton.addEventListener("click", handleNoButton);
noButton.addEventListener("mouseover", handleNoButton);

yesButton.addEventListener("click", () => {
  title.textContent = "Só bora";
  container.remove();
});
