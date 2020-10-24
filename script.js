function toggleButtons(id){
if(id == 1){
    document.getElementById('sectionToBeToggled1').classList.toggle('hide-extension')
}
if(id == 2){
    document.getElementById('sectionToBeToggled2').classList.toggle('hide-extension')
}
if(id == 3){
    document.getElementById('sectionToBeToggled3').classList.toggle('hide-extension')
} 
if(id == 4){
    document.getElementById('sectionToBeToggled4').classList.toggle('hide-extension')
} 
if(id == 5){
    document.getElementById('sectionToBeToggled5').classList.toggle('hide-extension')
} 
if(id == 6){
    document.getElementById('sectionToBeToggled6').classList.toggle('hide-extension')
} 
if(id == 7){
    document.getElementById('sectionToBeToggled7').classList.toggle('hide-extension')
} 
if(id == 8){
    document.getElementById('sectionToBeToggled8').classList.toggle('hide-extension')
} 
}


//************  Cart logic *********************/
let itemsList = ['Mayan Avocado Salad', 'Beef Burrito', 'Pulled Pork Burrito Bowl', 'Aztec Chicken Salad', 'Mexican Beef Salad', 'Mayan Avocado Salat', 'Veggi Salad','Vegan Salad'];
let shoppingList = [];


function addToCart(id) {
    if (id == 1 && shoppingList.includes(itemsList[0]) != itemsList.includes(itemsList[0])) {
        let item = itemsList[0];
        shoppingList.push(item);
        updateCart();
    }
    if (id == 2 && shoppingList.includes(itemsList[1]) != itemsList.includes(itemsList[1])) {
        let item = itemsList[1];
        shoppingList.push(item);
        updateCart();
    }
    if (id == 3 && shoppingList.includes(itemsList[2]) != itemsList.includes(itemsList[2])) {
        let item = itemsList[2];
        shoppingList.push(item);
        updateCart();
    }
    if (id == 4 && shoppingList.includes(itemsList[3]) != itemsList.includes(itemsList[3])) {
        let item = itemsList[3];
        shoppingList.push(item);
        updateCart();
    }
    if (id == 5 && shoppingList.includes(itemsList[4]) != itemsList.includes(itemsList[4])) {
        let item = itemsList[4];
        shoppingList.push(item);
        updateCart();
    }
    if (id == 6 && shoppingList.includes(itemsList[5]) != itemsList.includes(itemsList[5])) {
        let item = itemsList[5];
        shoppingList.push(item);
        updateCart();
    }
    if (id == 7 && shoppingList.includes(itemsList[6]) != itemsList.includes(itemsList[6])) {
        let item = itemsList[6];
        shoppingList.push(item);
        updateCart();
    }
    if (id == 8 && shoppingList.includes(itemsList[7]) != itemsList.includes(itemsList[7])) {
        let item = itemsList[7];
        shoppingList.push(item);
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