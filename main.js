// Creare un oggetto che descriva uno studente, con le seguenti proprietà:
// nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(),
// di aggiungere un nuovo oggetto studente inserendo nell’ordine:
// nome, cognome e età.


var indexUl = $("ul")


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
  nome: "paperino",
  cognome: "paperonia",
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
    indexUl.append("<li>" + key + ": " + classe[i][key] + "</li>")
  }
}

// for (var key in classe) {
//   indexUl.append("<li>" + classe[key].nome + " " + classe[key].cognome + " " + classe[key].eta + "</li>")
// }






$('#add').click(function () {

  //$("input[name='nome']")
  var nome = $("#nome").val();
  var cognome = $("#cognome").val();
  var eta = $("#quantity").val();

  var nuovoStudente = {
    nome: nome,
    cognome: cognome,
    eta: eta,
  }

  classe.push(nuovoStudente);

  // console.log(classe);

  for (var key in nuovoStudente) {
    // console.log(key, nuovoStudente[key]);
    indexUl.append("<li>" + key + ": " + classe[i][key] + "</li>")
  }
})


// var canzoni = [
//     canzone1 = {
//         titolo: 'Stairway to Heaven',
//         nomeCantante: 'Led Zeppelin',
//         anno: '1971'
//     },
//     canzone2 = {
//         titolo: 'Wish you were here',
//         nomeCantante: 'Pink Floyd',
//         anno: '1975'
//     }
// ];
// console.log(canzoni);
// for (var i = 0; i < canzoni.length; i++) {
//     document.getElementById('canzoni').innerHTML += "<li>" + canzoni[i].titolo + " " + canzoni[i].nomeCantante + "</li>";
// }
