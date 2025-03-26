const categoryList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll("ul#categories > li.item");
console.log(`Number of categories: ${categories.length}`);
categoryItems.forEach(Category => {
  const title = Category.querySelector("h2").textContent;
  const itemsCount = Category.querySelectorAll("ul > li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
});