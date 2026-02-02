import loadingInfo from "./loanding-info.js";

export default function AddingTransaction(type) {
    if(confirm(`¿Deseas agregar un ${type}?`)){
        const description = prompt('Description:');
        const amount = prompt('Amount:');
        loadingInfo(type, description, amount);
    }
}