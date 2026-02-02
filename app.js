import AddingTransaction from "./js/functions/adding-transaction.js";
import dateGenerator from "./js/functions/date-app.js";
import typePayment from "./js/functions/events.js";

// selectores
const headerContainer = document.querySelector('.header-container-date');


/*Eventos */
document.addEventListener('click', (evento)=>{
    typePayment(evento)})

/* Funciones */

dateGenerator(headerContainer);



console.log(localStorage)
