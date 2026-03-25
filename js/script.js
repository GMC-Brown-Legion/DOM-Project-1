const cards = document.querySelectorAll(".list-products > .card-body");

function getPrice(card) {
  return Number.parseInt(card.querySelector(".unit-price").textContent);
}

function getQuantity(card) {
  return Number.parseInt(card.querySelector(".quantity").textContent);
}

function updateTotal() {
  const total = [...document.querySelectorAll(".list-products > .card-body")]
    .reduce((sum, card) => sum + getPrice(card) * getQuantity(card), 0);
  document.querySelector(".total").textContent = total + " $";
}

cards.forEach(card => {
  const plus  = card.querySelector(".fa-plus-circle");
  const minus = card.querySelector(".fa-minus-circle");
  const trash = card.querySelector(".fa-trash-alt");
  const heart = card.querySelector(".fa-heart");
  const qty   = card.querySelector(".quantity");

  plus.addEventListener("click", () => {
    qty.textContent = getQuantity(card) + 1;
    updateTotal();
  });

  minus.addEventListener("click", () => {
    if (getQuantity(card) > 0) {
      qty.textContent = getQuantity(card) - 1;
      updateTotal();
    }
  });

  trash.addEventListener("click", () => {
    card.closest(".card-body").remove();
    updateTotal();
  });

  heart.addEventListener("click", () => {
    heart.style.color = heart.style.color === "red" ? "black" : "red";
  });
});
