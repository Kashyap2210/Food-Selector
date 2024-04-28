const foodToBeHad = document.querySelector("p");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let randomFood = Math.floor(Math.random() * 24) + 1;
  food(randomFood);
});

function food(randomFood) {
  foodToBeHad.textContent = `The food you are having is number ${randomFood} from the table given below.`;
}

