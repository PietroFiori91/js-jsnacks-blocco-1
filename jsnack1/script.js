// ARRAY - nomi + cognomi

const nomi = [
  "Paolo",
  "Luca",
  "Davide",
  "Giovanni",
  "Federico",
  "Giacomo",
  "Lorenzo",
  "Pietro",
  "Riccardo",
  "Simone",
  "Salvatore",
];
const cognomi = [
  "Rossi",
  "Verdi",
  "Bianchi",
  "Neri",
  "Gialli",
  "Baglio",
  "Storti",
  "Poretti",
  "Materazzi",
  "Fiori",
  "Zanetti",
];

// stampo nomi + cognomi random

const nomiRandom = Math.floor(Math.random() * nomi.length);
const cognomiRandom = Math.floor(Math.random() * cognomi.length);

// console.log(nomi[nomiRandom] + " " + cognomi[cognomiRandom]);

// CREO LISTA INVITATI

for (let i = 0; i < 50; i++) {
  const nomiRandom = Math.floor(Math.random() * nomi.length);
  const cognomiRandom = Math.floor(Math.random() * cognomi.length);

  console.log(nomi[nomiRandom] + " " + cognomi[cognomiRandom]);
}
