const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const header = document.getElementById("title");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const randomNumber1 = Math.floor(Math.random() * 6 + 1);
  const randomNumber2 = Math.floor(Math.random() * 6 + 1);

  player1.setAttribute("src", `images/dice${randomNumber1}.png`);
  player2.setAttribute("src", `images/dice${randomNumber2}.png`);

  if (randomNumber1 > randomNumber2) {
    header.textContent = "Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    header.textContent = "Player 2 Wins";
  } else {
    header.textContent = "Tie";
  }
});
