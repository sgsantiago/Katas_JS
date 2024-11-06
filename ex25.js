const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
];

let sales = 0;

for (let i = 0; i < products.length; i++) {
  const element = products[i].sellCount;
  sales += element;
}

console.log(sales / products.length);
