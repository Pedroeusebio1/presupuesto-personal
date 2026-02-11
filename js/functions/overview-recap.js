import { all } from "../data/array.js";

function idGenerator() {
    return Date.now()
}


export default function AddingTransaction(type) {
    if(confirm(`¿Deseas agregar un ${type}?`)){
        const description = prompt('Description:');
        const amount = prompt('Amount:');

        all.push({
            type, 
            description, 
            amount, 
            id: idGenerator()
        })
    }

    overviewAmounts()
}

function overviewAmounts() {
    
    all.forEach( transaction =>{
        switch (transaction.type) {
            case "income":
                let amount = transaction.ammount.reduce(
                    (acc, item)=>{ acc += item}
                )

                const span = document.querySelector(`span.${income}`).value

                span.value = amount
                break;
            case "expense":
                
                break;
            case "payment":
                
                break;
            case "balance":
                
                break;
        
            default:
                break;
        }
    })
}

