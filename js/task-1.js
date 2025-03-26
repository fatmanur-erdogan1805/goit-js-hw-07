const categoryList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll("ul#categories > li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul > li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});