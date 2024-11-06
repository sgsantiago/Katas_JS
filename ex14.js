const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code',
  'sleep',
  'enjoy'
];
function repeatCounter(param) {
  const counter = {};
  for (let i = 0; i < param.length; i++) {
    if (counter[param[i]] >= 1) {
      counter[param[i]]++;
    } else {
      counter[param[i]] = 1;
    }
  }
  console.log(counter);
}

repeatCounter(counterWords);
