const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
];

let peliculaPequeña = [];
let peliculaMediana = [];
let peliculaGrande = [];

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    peliculaPequeña.push(movie.name);
  }
  if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    peliculaMediana.push(movie.name);
  } else {
    peliculaGrande.push(movie.name);
  }
}
console.log('Peliculas pequeñas: ', peliculaPequeña);
console.log('Peliculas medianas: ', peliculaMediana);
console.log('Peliculas grandes: ', peliculaGrande);
