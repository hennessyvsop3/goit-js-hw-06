const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

console.log("");
items.forEach((item,i) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
    if (i !== items.length - 1) {
        console.log("");
    }

})










