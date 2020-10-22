let itemsList = ['Mayan Avocado Salad', 'Beef Burrito', 'Pulled Pork Burrito Bowl'];
let shoppingList = [];


function addToCart(id) {
    if (id == 1 && shoppingList.includes(itemsList[0]) != itemsList.includes(itemsList[0])) {
        shoppingList.push(itemsList[0]);
        console.log(shoppingList);
        updateCart();
    }
    if (id == 2 && shoppingList.includes(itemsList[1]) != itemsList.includes(itemsList[1])) {
        shoppingList.push(itemsList[1]);
        console.log(shoppingList);
        updateCart();
    }
    if (id == 3 && shoppingList.includes(itemsList[2]) != itemsList.includes(itemsList[2])) {
        shoppingList.push(itemsList[2]);
        console.log(shoppingList);
        updateCart();
    }
}

function updateCart() {
    document.getElementById('shopping-list').innerHTML = ' '
    let container = document.getElementById('shopping-list');
    for (let i = 0; i < shoppingList.length; i += 1) {
        let item = document.createElement('div');
        item.innerHTML = shoppingList[i] + '  ' + '<a href="#" onclick="deleteItem(' + i + ')" id="delButton" class="buttonDel"><img src="./trash.png"></a>';
        container.appendChild(item);

    }
}
function deleteItem(i) {
    shoppingList.splice(i, 1);
    updateCart();
}