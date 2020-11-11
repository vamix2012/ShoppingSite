function generateHTML(extendBtn, name, description, variatons, itemPrice, id, addBtn){
    return  `<div class="dish-selection-container">
    <div onclick="${extendBtn}">
        <h3>${name}</h3>
        <h5>${description}</h5>
        <h6>${variatons}</h6>
        <br>
        <h1>${itemPrice} €</h1>
    </div>
    <div id="${id}" class="hide-extension button-layout">
        <button onclick="${addBtn}" class="btn btn-primary">Add to Cart</button>
    </div>
</div>`;
}