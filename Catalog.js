module.exports = class Catalog {

    constructor() {
        this.catalogSytems = {
            "1": {
                id: 1,
                price: 0,
                discount: 0,
              },
              "2": {
                id: 2,
                price: 0,
                discount: 0,
        }
    }   
}

   addItemPriceToCatalog(itemId, price) {
       if (this.catalogSytems[itemId]) {
           let item = this.catalogSytems[itemId];
           this.catalogSytems[itemId] = {...item, price};
       } else {
        let item = { itemId, price, discount: 0};
        this.catalogSytems[itemId] = item;
       }
  }

  addItemDiscount(itemId, discount) {
    if (this.catalogSytems[itemId]) {
        let item = this.catalogSytems[itemId];
        this.catalogSytems[itemId] = {...item, price};
    } else {
     let item = { itemId, price, discount: 0};
     this.catalogSytems[itemId] = item;
    }



    this.catalogSytems[itemId] = price;
  }

}