import AddingTransaction from "./overview-recap.js";

/*Eventos */
export default function typePayment(e) {
    if(e.target.type === 'submit'){
        switch (e.target.value) {
            case 'income':
                AddingTransaction('income');
                break;
            case 'expenses':
                AddingTransaction('expense');
                break;
            case 'payments':
                AddingTransaction('payment');
                break;
            case 'balances':
                AddingTransaction('balance'); 
                break;
        }
    }

    
}