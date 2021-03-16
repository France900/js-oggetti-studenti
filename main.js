// Creare un oggetto che descriva uno studente, con le seguenti proprietà:
// nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(),
// di aggiungere un nuovo oggetto studente inserendo nell’ordine:
// nome, cognome e età.


var indexP = $("p")


var studente1 = {
  Nome: "pippo",
  Cognome: "asdruballe",
  eta: 56,
}

var studente2 = {
  Nome: "topolino",
  Cognome: "metrolplis",
  eta: 45,
}

var studente3 = {
  Nome: "paperino",
  Cognome: "paperonia",
  eta: 15,
}

console.log(studente1);

for (var key in studente1) {
  console.log(key, studente1[key]);
  // indexP.append(key + ": " + studente1[key] + "<br>")
}

var classe = [studente1, studente2, studente3]

// console.log("debug prima di ciclo", classe);

for (var i = 0; i < classe.length; i++) {
  // console.log("debug primo for i");
  for (var key in classe[i]) {
    // console.log("debug for in");
    // console.log(key, classe[i][key]);
    indexP.append(key + ": " + classe[i][key] + "<br>")
  }
}








//
// for (var i = 0; i < classe.length; i++) {
//   console.log(classe[i].nome + ' ' + classe[i].razza);
// }
