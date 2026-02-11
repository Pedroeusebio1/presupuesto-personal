import AddingTransaction from "./js/functions/overview-recap.js";
import dateGenerator from "./js/functions/date-app.js";
import typePayment from "./js/functions/events.js";
import { headerContainer } from "./js/data/selectores.js";


/*Eventos */
document.addEventListener('click', (evento)=>{
    typePayment(evento)}

)

/* Funciones */
dateGenerator(headerContainer);
