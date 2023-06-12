const home = document.querySelector(".homeContainer");
console.log(">>>>");
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
];

homeText.forEach((item, index, arrAdd) => {
  const redSquare = document.createElement("span");
  redSquare.classList.add("red", "square");

  const anchor = document.createElement("a");

  const handleMouseOver = () => {
    redSquare.style.cssText = `
      padding-inline: 0.25rem;
      background-color: #ff0000;
      margin-right: 1rem;
      margin-left: 1rem;
    `;
  };

  const handleMouseOut = () => {
    redSquare.style.cssText = "";
  };

  anchor.addEventListener("mouseover", handleMouseOver);
  anchor.addEventListener("mouseout", handleMouseOut);

  anchor.prepend(redSquare); // insert redSquare span to the anchor element

  anchorTextContent = document.createElement("span");
  anchorTextContent.textContent = item;
  anchor.append(anchorTextContent);
  anchor.setAttribute("href", "#");

  const container = document.createElement("div");
  container.classList.add("homeElement", index);

  container.appendChild(anchor);

  home.appendChild(container);
});

const homeImg = document.createElement("img");
homeImg.src = "./images/h1_img.webp";

const homeImgAnchor = document.createElement("a");
homeImgAnchor.classList.add("homeImgAnchor");
homeImgAnchor.setAttribute("href", "#");
homeImgAnchor.append(homeImg);
const buyNow = document.createElement("div");
buyNow.textContent = "Buy Now";
homeImgAnchor.append(buyNow);
home.append(homeImgAnchor);

const homeNav = document.querySelector(".homeAnchor");

homeNav.addEventListener("mouseover", (event) => {
  const homeElement = document.querySelectorAll(".homeContainer > *");
  homeElement.forEach((item, index, arr) => {
    item.style.cssText = `
      visibility: visible;
      opacity: 1;
      transform: translateY(1.3rem);
    `;
  });
});

homeNav.addEventListener("mouseout", (event) => {
  const homeElement = document.querySelectorAll(".homeContainer > *");
  homeElement.forEach((item, index, arr) => {
    item.style.cssText = `
    `;
  });
});

const collectionPages = [
  "Top Sidebar",
  "Top Sidebar",
  "Top Sidebar",
  "Top Sidebar",
  "Top Sidebar",
];
const producPages = [
  "Scroll fixed (3 columns)",
  "Scroll fixed (3 columns)",
  "Scroll fixed (3 columns)",
  "Scroll fixed (3 columns)",
  "Scroll fixed (3 columns)",
  "Scroll fixed (3 columns)",
  "Scroll fixed (3 columns)",
];

const productFeatures = [
  "Low stock alert",
  "Low stock alert",
  "Low stock alert",
  "Low stock alert",
  "Low stock alert",
  "Low stock alert",
  "Low stock alert",
];

const collectionPagesContainer = document.createElement("div");
const producPagesContainer = document.createElement("div");
const productFeaturesContainer = document.createElement("div");

const collectionPagesList = collectionPages.map((item) => {
  const anchor = document.createElement("a");
  const span = document.createElement("span");
  const redSquare = document.createElement("span");
  redSquare.classList.add("red", "square");
  span.textContent = item;

  anchor.prepend(span);
  anchor.prepend(redSquare);
  return anchor;
});
collectionPagesContainer.append(...collectionPagesList);

const producPagesList = producPages.map((item) => {
  const anchor = document.createElement("a");
  const span = document.createElement("span");
  const redSquare = document.createElement("span");
  redSquare.classList.add("red", "square");
  span.textContent = item;

  anchor.prepend(span);
  anchor.prepend(redSquare);
  return anchor;
});
producPagesContainer.append(...producPagesList);

const productFeaturesList = productFeatures.map((item) => {
  const anchor = document.createElement("a");
  const span = document.createElement("span");
  const redSquare = document.createElement("span");
  redSquare.classList.add("red", "square");
  span.textContent = item;

  anchor.prepend(span);
  anchor.prepend(redSquare);
  return anchor;
});
productFeaturesContainer.append(...productFeaturesList);

console.log(productFeaturesContainer);

const ShopImg = document.createElement("img");
ShopImg.src = "./images/shopImg.webp";

const ShopImgAnchor = document.createElement("a");
ShopImgAnchor.classList.add("shopImgAnchor");
ShopImgAnchor.setAttribute("href", "#");
ShopImgAnchor.append(ShopImg);
const pagebuyNow = document.createElement("div");
pagebuyNow.textContent = "Buy Now";
ShopImgAnchor.append(pagebuyNow);
console.log(ShopImgAnchor);

const shopContainer = document.querySelector(".shopContainer");
shopContainer.append(
  collectionPagesContainer,
  producPagesContainer,
  productFeaturesContainer,
  ShopImgAnchor
);

// const page = document.querySelector(".page");
// page.addEventListener("mouseover", (event) => {
//   const pageList = document.querySelector(".pageList");
//   pageList.style.cssText =  `
//   opacity: 1;
//   visibility: visible;
//   transform: translateY(0rem)
//   `;
// })

// page.addEventListener("mouseout", (event) => {
//   const pageList = document.querySelector(".pageList");
//   pageList.style.cssText =  `
//   opacity: 0;
//   visibility: hidden;
//   transform: translateY(5rem)
//   `;
// })