/*
    myCart Array
*/
let myCart = [];

/*
    Purpose : This is list of product
*/
let storeItem1 = [{
        category: "sweet",
        item: [{
                image: "sweets-1.jpeg",
                name: "sweet item",
                price: 5
            },
            {
                image: "sweets-2.jpeg",
                name: "sweet item",
                price: 10
            },
            {
                image: "sweets-3.jpeg",
                name: "Sweet item",
                price: 15
            }
        ]
    },
    {
        category: "cupcake",
        item: [{
                image: "cupcake-1.jpeg",
                name: "Cupcake Item",
                price: 5
            },
            {
                image: "cupcake-2.jpeg",
                name: "Cupcake item",
                price: 10
            },
            {
                image: "cupcake-3.jpeg",
                name: "Cupcake Item",
                price: 15
            }
        ]
    },
    {
        category: "cake",
        item: [{
                image: "cake-1.jpeg",
                name: "Cake Item",
                price: 5
            },
            {
                image: "cake-2.jpeg",
                name: "Cake Item",
                price: 10
            },
            {
                image: "cake-3.jpeg",
                name: "Cake item",
                price: 15
            }
        ]
    },
    {
        category: "doughnut",
        item: [{
                image: "doughnut-1.jpeg",
                name: "Dougnut Item",
                price: 5
            },

            {
                image: "doughnut-2.jpeg",
                name: "Dougnut item",
                price: 10
            },

            {
                image: "doughnut-3.jpeg",
                name: "Dougnut item",
                price: 15
            },
            {
                image: "doughnut-3.jpeg",
                name: "Xyz item",
                price: 15
            }
        ]
    }
];

/*
    Function :  setAttributes()
    Purpose: this helper is used to set attribute which is needed to create dynamic html
*/
let setAttributes = (element, attribute) => {
    for (let key in attribute) {
        element.setAttribute(key, attribute[key]);
    }
}

/*
    Function :  generateButtonUI()
    Purpose: It will create dynamic button
*/
let generateButtonUI = (category) => {
    let filterBtn = document.createElement('a');
    setAttributes(filterBtn, { "class": "btn btn-outline-secondary btn-black text-uppercase filter-btn m-2", "href": "#", "onclick": "getFilteredProduct(\'" + category + "\')" });
    let btnText = document.createTextNode(category);
    filterBtn.appendChild(btnText);
    document.getElementById('filterBtn').appendChild(filterBtn);
}

let singleItem = document.getElementById('store-items');

/*
    Function :  singleStoreItem()
    Purpose: It will create dynamic UI(Product List which is displayed in index page)
*/
const singleStoreItem = (productObj) => {

    let mainWrapper = document.createElement('div');
    setAttributes(mainWrapper, { 'class': 'col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item' });

    let card = document.createElement('div');
    setAttributes(card, { 'class': 'card' });

    let imgContainer = document.createElement('div');
    setAttributes(imgContainer, { 'class': 'img-container' });

    let itemImg = document.createElement('img');
    setAttributes(itemImg, { 'src': 'assets/images/' + productObj.image, 'alt': 'Cart Item Image', 'class': 'card-img-top store-img' });

    let storeIconWrap = document.createElement('span');
    setAttributes(storeIconWrap, { 'class': 'store-item-icon' });

    let storeIcon = document.createElement('i');
    setAttributes(storeIcon, { 'class': 'fa fa-shopping-cart', 'onclick': 'addIntoCartItem(\'' + productObj.image + '\',\'' + productObj.name + '\',' + productObj.price + ')' });

    let cardBody = document.createElement('div');
    setAttributes(cardBody, { 'class': 'card-body' });

    let cardBodyInnerWrap = document.createElement('div');
    setAttributes(cardBodyInnerWrap, { 'class': 'card-text d-flex justify-content-between text-capitalize' });

    let itemName = document.createElement('h5');
    setAttributes(itemName, { 'id': 'store-item-name' });

    let itemNameValue = document.createTextNode(productObj.name);

    let itemPriceWrap = document.createElement('h5');
    setAttributes(itemPriceWrap, { 'class': 'store-item-value' });

    let priceSymb = document.createTextNode('$');

    let itemPrice = document.createElement('strong');
    setAttributes(itemPrice, { 'class': 'font-weight-bold', 'id': 'store-item-price' });

    let itemPriceValue = document.createTextNode(productObj.price);


    mainWrapper.appendChild(card);
    card.appendChild(imgContainer);
    imgContainer.appendChild(itemImg);
    imgContainer.appendChild(storeIconWrap);
    storeIconWrap.appendChild(storeIcon);
    document.body.appendChild(mainWrapper);
    card.appendChild(cardBody);
    cardBody.appendChild(cardBodyInnerWrap);
    cardBodyInnerWrap.appendChild(itemName);
    itemName.appendChild(itemNameValue);
    cardBodyInnerWrap.appendChild(itemPriceWrap);
    itemPriceWrap.appendChild(priceSymb);
    itemPriceWrap.appendChild(itemPrice);
    itemPrice.appendChild(itemPriceValue);

    singleItem.appendChild(mainWrapper);
}


let filterArray = [];

let getFilteredProduct = (cat) => {
    filterArray = [];
    if (cat == "all") {
        let productList = storeItem1.map(function(data, index) {
            data.item.map(function(data1, index1) {
                filterArray.unshift(data1);
            });
        });
    } else {
        for (let i = 0; i < storeItem1.length; i++) {
            if (storeItem1[i].category == cat) {
                let productList = storeItem1[i].item.map(function(data, index) {
                    filterArray.unshift(data);
                });
                break;
            }
        }
    }
    displayProductList(filterArray);
}

let displayProductList = (filterProductArray) => {
    document.getElementById("store-items").innerHTML = "";
    filterProductArray.map(function(data, index) {
        singleStoreItem(data)
    });
}



/*
    Function :  displayBtn()
    Purpose: It will used to Display Button
*/
let categoryArray = [];
let displayBtn = (product) => {
    generateButtonUI('all')
    product.map(function(data, index) {
        generateButtonUI(data.category, product);
    });


}

/*
    Function :  createUi()
    Purpose: It will used to Create UI of my Cart List
*/
let createUi = (productData, index) => {
    let iDiv = document.createElement('div');
    setAttributes(iDiv, { "class": "cart-item d-flex justify-content-between text-capitalize my-3" });
    document.getElementById('mycartdata').appendChild(iDiv);

    // For Image
    let imgDiv = document.createElement('IMG');
    setAttributes(imgDiv, { "class": "img-fluid rounded-circle", "src": "assets/images/" + productData.image, "width": "60px" });
    iDiv.appendChild(imgDiv);

    //For Qty
    let qtyDiv = document.createElement('input');
    setAttributes(qtyDiv, { "class": "qtyBox", "placeholder": "1", "width": "30px" });
    iDiv.appendChild(qtyDiv);

    // Name Div
    let iNamePriceDiv = document.createElement('div');
    setAttributes(iNamePriceDiv, { "class": "item-text" });
    iDiv.appendChild(iNamePriceDiv);

    // Paragraph Tag
    let sName = document.createElement('p');
    setAttributes(sName, { "class": "font-weight-bold mb-0" });
    sName.innerHTML = productData.name;
    iNamePriceDiv.appendChild(sName);

    // Span Price
    let sSpan = document.createElement('span');
    setAttributes(sSpan, { "class": "cart-item-price" });
    sSpan.innerHTML = "$ " + productData.price;
    iNamePriceDiv.appendChild(sSpan);

    // For Delete a Tag
    let deleteanchor = document.createElement('a');
    setAttributes(deleteanchor, { "class": "cart-item-remove" });
    iDiv.appendChild(deleteanchor);

    // Icon for delete
    let deleteIcon = document.createElement('i');
    setAttributes(deleteIcon, { "class": "fa fa-trash", "onclick": 'removeCartItem(\'' + index + '\')' });
    deleteanchor.appendChild(deleteIcon);
}

/*
    Function :  showCart()
    Purpose: It will used to show cart List
*/
let showCart = () => {
    let cart = document.getElementById("cart");
    if (cart.style.display === "none") {
        cart.style.display = "block";
    } else {
        cart.style.display = "none";
    }
}

/*
    Function :  showCart()
    Purpose: to display my cart list
*/
let cartData = () => {
    document.getElementById('mycartdata').innerHTML = "";
    let total = 0;
    let myCartLength = myCart.length;

    myCart.map(function(data, index) {
        total += data['price'];
        createUi(data, index);
    });

    document.getElementById("cart-total").innerHTML = total;
    document.getElementById("item-count").innerHTML = myCartLength;
    document.getElementById("item-total").innerHTML = total;
}

/*
    Function :  addIntoCartItem()
    Purpose: This is used to add item in cart
*/

let addIntoCartItem = (image, name, price) => {
    let itemObj = {
        image: image,
        name: name,
        price: price
    };
    alert('Add into cart');
    myCart.unshift(itemObj);
    cartData();


    for (var i = 0 + 1; i < myCart.length; i++) {
        //console.log(myCart[i])
        for (var newItem = 0 + 1; newItem < myCart.length; newItem++) {
            //console.log(myCart[newItem])
            if (myCart[i] == myCart[newItem]) {
                console.log(document.getElementsByClassName("qtyBox"))
            }
        }
    }

}


/*
    Function :  removeCartItem()
    Purpose: To remove any product from cart list
*/
let removeCartItem = (removeProductIndex) => {
    myCart.splice(removeProductIndex, 1);
    cartData();
}

/*
    Function :  clearCart()
    Purpose: To clear cart list
*/
let clearCart = () => {
    myCart.splice(0, myCart.length);
    cartData();
}



searchResult = [];
const filter = () => {
    searchResult = [];
    let getInputValue = document.querySelector('#search-item').value;
    let itemsList = document.querySelectorAll('.store-item');
    for (let i = 0; i < filterArray.length; i++) {
        if (filterArray[i].name.indexOf(getInputValue) != -1) {
            searchResult.unshift(filterArray[i]);
        }
    }
    console.log(searchResult);
    displayProductList(searchResult);
}

var debounce = (func, delay) => {
    let Timer
    return function() {
        clearTimeout(Timer)
        Timer = setTimeout(() =>
            filter(), 300)
    }
}

var myEfficientFn = debounce(filter, 300);

getFilteredProduct("all");

displayBtn(storeItem1);

cartData();