const Catalog = require('./Catalog');
const Cart = require('./Cart');

const catalog = new Catalog();

// Tests
let desc1 = 'The user can create a new empty cart';
let cart = new Cart();
assertNotNull(cart, desc1);

let desc2 = 'The user can add a new item to the cart';
let item = {};
let cartWithItems = new Cart();
cartWithItems.addItem(item);

assertNotNull(cartWithItems, desc2);
assertHasItems(cartWithItems, desc2);

let desc3 = 'Allow to add price to an item in the catalog';
let itemId = 0;
catalog.addItemPriceToCatalog(itemId, 1000);

assertEqual(catalog[itemId], 1000, desc3);

let desc4 = 'Allow to add calculate total price';
let expected = 1000;
let newItem = { id: 1, price: 1000 }; 

let cartWithTotalPrice = new Cart();
cartWithTotalPrice.addItem(newItem);
let result = cartWithTotalPrice.getTotalPrice();

let desc5 = 'Allow to add multiple items add calculate total price';
let expectedMultipleItems = 2000;

let newItem1 = { id: 1, price: 1000 }; 
let newItem2 = { id: 1, price: 1000 }; 

let cartWithMultipleItems = new Cart();
cartWithMultipleItems.addItem(newItem1);
cartWithMultipleItems.addItem(newItem2);

let resultMultipleItems = cartWithMultipleItems.getTotalPrice();

assertEqual(expectedMultipleItems, resultMultipleItems, desc5);


let desc6 = 'Allow to add a discount to a item';
let discount = 0.10;

let itemIdWithDiscount = { id: 3, price: 1000 , discount};

catalog.addItemPriceToCatalog(itemIdWithDiscount);
catalog.addItemDiscount(itemIdWithDiscount.id, disccount);

assertEqual(catalog[itemIdWithDiscount.id], itemIdWithDiscount.price, desc6);


function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertNotNull(a, desc) {
  if (a) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}

function assertHasItems(cart, desc) {
  if (cart.items.length > 0) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}

