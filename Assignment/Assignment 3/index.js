const products = [
 { id: 1, name: "Pen", price: 10 },
 { id: 2, name: "Pencil", price: 5 },
 { id: 3, name: "Notebook", price: 50 },
 { id: 4, name: "Eraser", price: 3 },
 { id: 5, name: "Sharpener", price: 7 },
 { id: 6, name: "Scale", price: 15 },
 { id: 7, name: "Marker", price: 20 },
 { id: 8, name: "Highlighter", price: 25 },
 { id: 9, name: "Folder", price: 40 },
 { id: 10, name: "Tape", price: 18 },
 { id: 11, name: "Glue", price: 22 },
 { id: 12, name: "Stapler", price: 60 },
 { id: 13, name: "Puncher", price: 55 },
 { id: 14, name: "Chart Paper", price: 35 },
 { id: 15, name: "Craft Scissors", price: 45 },
 { id: 16, name: "Compass", price: 30 },
 { id: 17, name: "Divider", price: 28 },
 { id: 18, name: "Drawing Book", price: 65 },
 { id: 19, name: "Sketch Pens", price: 38 },
 { id: 20, name: "Sticky Notes", price: 12 }
];

// 1. Add to Cart: Only items under ₹35 and take each 2 product
const cart = products
  .filter(product => product.price <= 35)
  .map(product => ({ ...product, quantity: 2 }));

console.log("Cart:", cart);

// Create Order
const order = {
  id: "7985589506",
  items: cart,
  total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
};
console.log(" Order Created:", order);


// Payment 

let wallet = 1000;

if (wallet >= order.total) 
{
    wallet -= order.total;
    console.log(`Payment Successful! Paid ₹${order.total}`);
    // 4. Order Summary
    const summary = order.items.map(item => (    
    {
    name: item.name,
    price: item.price,
    qty: item.quantity,
    total: item.price * item.quantity
    }));
    console.log(" Order Summary:", summary);
    // 5. Update Wallet
    console.log(" Wallet Balance after purchase:", wallet);
  
} 
else 
{ 
  console.log(" Payment Failed: Insufficient balance");
}
