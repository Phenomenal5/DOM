const price = document.querySelectorAll('.unit-price');
const quantity = document.querySelectorAll('.quantity');
const add = document.querySelectorAll('.fa-plus-circle');
const minus = document.querySelectorAll('.fa-minus-circle');
const clearItem = document.querySelectorAll('.fa-trash-alt');
const heart = document.querySelectorAll('.fa-heart')

// add.addEventListener('click', love);
// minus.addEventListener('click', love);
// clearItem.addEventListener('click', love);
add.forEach(add_icon => {
    add_icon.addEventListener('click', btn =>{
        btn.target;
        quantity.forEach(add_quantity => {
            add_quantity.textContent += 1;
        })
})

    


heart.forEach(icon => {
    icon.addEventListener('click' , event =>{
        event.target.style.color = event.target.style.color === 'black' ? 'red' : 'black' ;
    });
});

console.log(heart);
console.log(quantity);
console.log(add);
console.log(minus);
console.log(price);