const arr = document.querySelector('#categories').children;

console.log(`Number of categories: ${arr.length}`);

console.log("");
Array.from(arr).forEach((el, i) => {
    console.log(`Category: ${el.querySelector('h2').textContent}`)
    
    console.log(`Elements: ${el.querySelectorAll('li').length}`);
    if (i !== arr.length - 1) {
        console.log("");
    }

})










