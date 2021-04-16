//dichiaro le variabili
var iterations = 100
var numbers = "";

//con un ciclo for creo la numerazione da 0 a 100
for (var i = 1; i <= iterations; i++) {
    //creo due variabili per stabilire quali numeri siano multipli di 3 e di 5
    var fizz = i % 3 === 0
    var buzz = i % 5 === 0 

    //imposto le condizioni che il ciclo deve rispettare per eseguire la corretta numerazione
    if ((fizz) && (buzz)) {
        numbers += "fizzBuzz \n" 
    } else if (fizz) {
        numbers += "fizz \n"
    } else if (buzz) {
        numbers += "buzz \n"
    } else {
        numbers +=  i + " ";
    }
}
//stampo il risultato nella console
console.log(numbers);

