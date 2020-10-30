function updateMenu() {
    updatePopulars();
    updateTexMex();
    closeWindow();
}

function toggleButtons(id) {
    let selector = 'sectionToBeToggled' + id;
    document.getElementById(selector).classList.toggle('hide-extension');
}


//************  Cart logic *********************/
let items = [
    { 'name': 'Mayan Avocado Salad', 'description': 'Fresh salad with mixed vegetables and lemon juiced avocado', 'variations': 'variatons: Chipotle-tomato sauce, Habanero sauce, more avoacado', 'price': 6.99 },
    { 'name': 'Beef Burrito', 'description': 'Grilled Tortilla with grilled Beef and mixed vegetables', 'variations': 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 'price': 7.99 },
    { 'name': 'Pulled Pork Burrito Bowl', 'description': 'Grilled Beef, mixed vegetables and rice', 'variations': 'Variatons: Chipotle-tomato sauce, Habanero sauce, Avocado sauce, more meat', 'price': 7.49 },
    { 'name': 'Aztec Chicken Salad', 'price': 6.15 },
    { 'name': 'Mexican Beef Salad', 'price': 6.99 },
    { 'name': 'Mayan Avocado Salat', 'price': 6.99 },
    { 'name': 'Veggi Salad', 'price': 5.99 },
    { 'name': 'Vegan Salad', 'price': 5.99 }

];



let shoppingList = [];
let shoppingPriceList = [];


function updateTexMex() {
    let productContainer = document.getElementById('TexMexElements');
    for (let i = 3; i < 8; i += 1) {
        let extendBtn = 'toggleButtons(' + i;
        let addBtn = 'addToCart(' + i;
        let item = document.createElement('div');
        let name = items[i].name;
        let description = items[i].description;
        let variatons = items[i].variations;
        let itemPrice = items[i].price;
        let id = 'sectionToBeToggled' + i;
        item.innerHTML = `<div class="dish-selection-container">
    <div onclick="${extendBtn})">
        <h3>${name}</h3>
        <h5>${description}</h5>
        <h6>${variatons}</h6>
        <br>
        <h1>${itemPrice} €</h1>
    </div>
    <div id="${id}" class="hide-extension button-layout">
        <button onclick="${addBtn})" class="btn btn-primary">Add to Cart</button>
    </div>
</div>`;
        productContainer.appendChild(item);
    }
}

function updatePopulars() {
    let productContainer = document.getElementById('popularElements');
    for (let i = 0; i < 3; i += 1) {
        let extendBtn = 'toggleButtons(' + i;
        let addBtn = 'addToCart(' + i;
        let item = document.createElement('div');
        let name = items[i].name;
        let description = items[i].description;
        let variatons = items[i].variations;
        let itemPrice = items[i].price;
        let id = 'sectionToBeToggled' + i;
        item.innerHTML = `<div class="dish-selection-container">
    <div onclick="${extendBtn})">
        <h3>${name}</h3>
        <h5>${description}</h5>
        <h6>${variatons}</h6>
        <br>
        <h1>${itemPrice} €</h1>
    </div>
    <div id="${id}" class="hide-extension button-layout">
        <button onclick="${addBtn})" class="btn btn-primary">Add to Cart</button>
    </div>
</div>`;
        productContainer.appendChild(item);
    }
}

function addToCart(id) {
    if (shoppingList.includes(items[id].name) != items[id]['name'].includes(items[id].name)) {
        let item = items[id].name;
        let price = items[id].price;
        shoppingList.push(item);
        shoppingPriceList.push(price);
        updatePrice();
        updateCart();

    }
}

function updatePrice() {
    function percentage(num, per)
{
  return (num/100)*per;
}
    let shoppingTotal = shoppingPriceList.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    if (shoppingPriceList.length == 0) {
        shoppingTotal = 0;
    } else {
        shoppingTotal -= percentage(shoppingTotal, 5);
    }
    document.getElementById('totalPrice').innerHTML = shoppingTotal.toFixed(2);
    console.log('Total Price is :' + shoppingTotal.toFixed(2))

}

function updateCart() {
    document.getElementById('shopping-list').innerHTML = ' '
    let container = document.getElementById('shopping-list');
    for (let i = 0; i < shoppingList.length; i += 1) {
        let item = document.createElement('div');
        item.innerHTML = shoppingList[i] + '  ' + shoppingPriceList[i] + '€' + '<a href="#" onclick="deleteItem(' + i + ')" id="delButton" class="buttonDel">   <img src="./trash.png"></a>';
        container.appendChild(item);


    }
}

function deleteItem(i) {
    shoppingList.splice(i, 1);
    shoppingPriceList.splice(i, 1);
    updateCart();
    updatePrice();
}

function orderComplete() {
    if (shoppingList.length != 0) {
        shoppingList = [];
        shoppingPriceList = [];
        updateCart();
        updatePrice();
        document.getElementById('complete').classList.remove('hide');
    }else{
        document.getElementById('incomplete').classList.remove('hide');
    }

}

function closeWindow() {
    document.getElementById('complete').classList.add('hide');
    document.getElementById('incomplete').classList.add('hide');
}