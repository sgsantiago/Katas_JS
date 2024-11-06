const nameList = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function findName(a, b) {
  if (a.includes(b)) {
    return `${true} en la posición: ${a.indexOf(b)}`;
  } else {
    return false;
  }
}

console.log(findName(nameList, 'sdfasdf'));
