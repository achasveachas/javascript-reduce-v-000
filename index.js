const products = [
  { name: 'Head & Shoulders Shampoo', price: 5, discount: .6 },
  { name: 'Twinkies', price: 8, discount: .45 },
  { name: 'Oreos', price: 6.5, discount: .8 },
  { name: 'Jasmine-scented bath pearls', price: 14, discount: .7 },
];

const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 },
];

function reduce(collection, callback, initialValue) {
  let result = initialValue;

  collection.forEach(function (product) {
    result = callback(result, product);
  });

  return result;
}

function callback(totalPrice, product) {
  if (product.price < 7) {
    return totalPrice + product.price;
  } else {
    return totalPrice;
  }
}

function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}

console.log(reduce(products, callback, 0));

console.log(reduce(couponLocations, couponCounter, 0));
console.log(reduce(couponLocations, couponCounter, 3));

console.log(couponLocations.reduce(couponCounter, 0));

