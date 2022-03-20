console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
    if (isFull() === false) {
    basket.push(item);
    return true;
} else if (isFull() === true) {
    return false;
}
}

function listItems() {
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}

addItem('apples');
addItem('bananas');

listItems();

function empty() {
    basket = [];
    console.log(basket);
    return true;
}

addItem('margherita pizza');
listItems();

addItem('brussel sprouts')
empty();//this is called a callback, haha

const maxItems = 5;

function isFull() {
    if (basket.length < 5) {
        return false;
    } else if (basket.length >= 5) {
        return true;
    }
}

basket.push('margherita pizza', 'pickles', 'oranges', 'cereal');
console.log('The basket is full:', isFull());
basket.push('one bag of ketchup')
console.log('NOW the basket is full:', isFull());
basket.push('candy bar');
console.log('Now the basket is REALLY full:', isFull());

function removeItem(item) {
    if (basket.indexOf(item) != -1) {
        basket.splice(item);
        return item;
    } else if (basket.indexOf(item) === -1) {
        return null;
    }
    
}

console.log("I guess I'll have to get rid of the", removeItem('brussel sprouts'));
console.log('Shoot. Okay, then the ', removeItem('one bag of ketchup'));