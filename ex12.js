const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'fish',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'fish',
  'soda',
  'fish'
];

function removeDuplicates(param) {
  for (let i = 0; i < param.length; i++) {
    const firstEelement = param[i];

    for (let j = i + 1; j < param.length; j++) {
      const secondElement = param[j];

      if (firstEelement === secondElement) {
        param.splice(j, 1);
      }
    }
  }
  console.log(param);
}

removeDuplicates(duplicates);
