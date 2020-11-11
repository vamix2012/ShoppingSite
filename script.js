let shoppingList = [];
let shoppingPriceList = [];

function updateMenu() {
    updateItems(3, 8, 'TexMexElements');
    updateItems(0, 3, 'popularElements');
    closeWindow();
}

function toggleButtons(id) {
    let selector = 'sectionToBeToggled' + id;
    document.getElementById(selector).classList.toggle('hide-extension');
}

function updateItems(start, finish, category) {
    let productContainer = document.getElementById(category);
    for (let i = start; i < finish; i++) {
        let extendBtn = 'toggleButtons(' + i + ')';
        let addBtn = 'addToCart(' + i + ')';
        let item = document.createElement('div');
        let name = items[i].name;
        let description = items[i].description;
        let variatons = items[i].variations;
        let itemPrice = items[i].price;
        let id = 'sectionToBeToggled' + i;
        item.innerHTML = generateHTML(extendBtn, name, description, variatons, itemPrice, id, addBtn);
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
    function percentage(num, per) {
        return (num / 100) * per;
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
    } else {
        document.getElementById('incomplete').classList.remove('hide');
    }
}

function closeWindow() {
    document.getElementById('complete').classList.add('hide');
    document.getElementById('incomplete').classList.add('hide');
}