const home = document.querySelector(".home.Container");
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
  "Bicycle Shop",
  "Tea Shop",
  "Pet Shop",
  "Bicycle Shop",
  "Tea Shop",
  "Pet Shop",
  "Bicycle Shop",
  "Tea Shop",
  "Pet Shop",
  "Bicycle Shop",
  "Tea Shop",
  "Pet Shop",
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
  anchor.addEventListener("mouseover", () => {
    redSquare.style.paddingInline = "0.25rem";
    redSquare.style.backgroundColor = "#ff0000";
    redSquare.style.marginRight = "1rem";
    redSquare.style.marginLeft = "1rem";
  });
  anchor.addEventListener("mouseout", () => {
    redSquare.style.paddingInline = "";
    redSquare.style.backgroundColor = "";
    redSquare.style.marginRight = "";
    redSquare.style.marginLeft = "";
  });

  anchor.textContent = item;
  anchor.setAttribute("href", "#");

  const container = document.createElement("div");
  container.classList.add("homeElement", index);
  container.appendChild(redSquare);
  container.appendChild(anchor);

  home.appendChild(container);
});
console.log(home);
