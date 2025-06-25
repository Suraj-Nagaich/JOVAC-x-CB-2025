const products = [
  { id: 1, name: "Pen", price: 10 },
  { id: 2, name: "Notebook", price: 50 },
  { id: 3, name: "Tape", price: 20 },
  { id: 4, name: "Sticky Notes", price: 12 }
];


let wallet = 2;


function addToCart(products, callback) {
  const cart = products.map(p => ({ ...p, quantity: 2 }));
  console.log("Cart Added:", cart);
  callback(cart);
}

function createOrder(cart, callback) {
  const order = {
    orderId: Date.now(),
    items: cart,
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  };
  console.log("Order Created:", order);
  callback(order);
}


function processPayment(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (wallet >= order.total) {
        wallet -= order.total;
        resolve(`Payment of ₹${order.total} successful. Remaining Wallet: ₹${wallet}`);
      } else {
        reject("Payment failed: Not enough balance.");
      }
    }, 1000); 
  });
}

function showOrderSummary(order) {
  return new Promise(resolve => {
    const summary = order.items.map(item => ({
      name: item.name,
      price: item.price,
      qty: item.quantity,
      total: item.price * item.quantity
    }));
    resolve(summary);
  });
}

addToCart(products, (cart) => {
  createOrder(cart, (order) => {
    processPayment(order)
      .then(successMsg => {
        console.log(successMsg);
        return showOrderSummary(order);
      })
      .then(summary => {
        console.log("📃 Order Summary:");
        summary.forEach(item => {
          console.log(`${item.qty} x ${item.name} = ₹${item.total}`);
        });
        console.log("✅ Done");
      })
      .catch(err => {
        console.error(err);
      });
  });
});
