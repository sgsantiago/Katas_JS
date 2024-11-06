const goodProducts = [];
const badProducts = [];
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
];

for (let i = 0; i < products.length; i++) {
  const element = products[i].sellCount;
  if (element < 20) {
    badProducts.push(products[i].name);
  } else {
    goodProducts.push(products[i].name);
  }
}

console.log(`Our worst products are: ${badProducts}`);
console.log(`Our best products are: ${goodProducts}`);
