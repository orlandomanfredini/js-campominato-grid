// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.


// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


// collego bottone con js quando clicco si vedono tutte le celle
let btnStart = document.querySelector('.btn-start'); // dom element
console.log(btnStart)

// creo collegamento con main-box dove inserirò le celle
let boxCell = document.querySelector('.main-box')

// creo numero di iterazioni che voglio
const interation = 101; //i = 1 in ciclo for 

// creo ciclo per riempire main-box con celle numerate
for(let i = 1; i < interation; i++){
    // creo elemento dom
    let cell = document.createElement('button')
    // gli stampo il suo numero
    cell.innerHTML += [i]
    // creo ascolto evento clic sul button gioca ora
    btnStart.addEventListener('click', function(){
    // aggiungo la classe cell che da il layout della casella
    cell.classList.add('cell')
    // vado ad appendere al div main-box tutte le caselle 
    boxCell.append(cell)

    
    // aggiungo evento ascolto sulla singola cella con classe .cell
    cell.addEventListener('click', function(){
    // aggiungo e tolgo classe che cambia colore
    cell.classList.toggle('bg-change')
    // stampo in console numero casella
    console.log ('cella cliccata n: ' + cell.innerHTML)
})

})

}


