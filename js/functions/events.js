import AddingTransaction from "./adding-transaction.js";

/*Eventos */
export default function typePayment(e) {
    if(e.target.type === 'submit'){
        switch (e.target.value) {
            case 'income':
                AddingTransaction('income');
                break;
            case 'expenses':
                AddingTransaction('expenses');
                break;
            case 'payments':
                AddingTransaction('payments');
                break;
            case 'balances':
                AddingTransaction('balances'); 
                break;
        }
    }
}