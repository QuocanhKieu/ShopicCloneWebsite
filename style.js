const home = document.querySelector(".homeContainer");
const shop = document.querySelector(".shop");
const page = document.querySelector(".home");
console.log(home);

let homeText = [
  "Bicycle Shop",
  "Tea Shop",
  "Pet Shop",
  "Bicycle Shop",
  "Tea Shop",
  "Pet Shop",
];

homeText.forEach((item, index, arrAdd) => {
  const redSquare = document.createElement("span");
  redSquare.classList.add("red", "square");

  const anchor = document.createElement("a");
  anchor.textContent = item;
  anchor.setAttribute("href", "#");

  const container = document.createElement("div");
  container.classList.add("homeElement", index);
  container.appendChild(redSquare);
  container.appendChild(anchor);

  home.appendChild(container);
});
console.log(home);
