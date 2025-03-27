// Kategoriler listesini seç
const categoryItems = document.querySelectorAll("#categories > .item");

// Toplam kategori sayısını yazdır
console.log(`Number of categories: ${categoryItems.length}`);

// Her bir kategori için başlığı ve eleman sayısını yazdır
categoryItems.forEach(category => {
    const title = category.querySelector("h2").textContent; // Başlığı al
    const itemsCount = category.querySelectorAll("ul > li").length; // İçindeki öğeleri say
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsCount}`);
});
