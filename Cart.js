module.exports = class Cart {
    
   constructor() {
       this.items = [];
   }

   addItem(item) {
       this.items.push(item)
   }

   getTotalPrice() {
       let totalPrice = 0;
       for (let item of this.items) {
           totalPrice += item.price;
       }

       return totalPrice;
   }

}