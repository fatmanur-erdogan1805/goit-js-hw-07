const categoryList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll("ul#categories > li.item");
<<<<<<< HEAD

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul > li").length;
  console.log(`Category: ${title}`);
=======
console.log(`Number of categories: ${categories.length}`);
categoryItems.forEach(Category => {
  const title = Category.querySelector("h2").textContent;
  const itemsCount = Category.querySelectorAll("ul > li").length;
  console.log(`Category: ${categoryTitle}`);
>>>>>>> e97ad73ea1d70a269768917859626d5bc175398e
  console.log(`Elements: ${itemsCount}`);
});