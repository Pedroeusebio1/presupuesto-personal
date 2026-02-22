/*Selectores */

const btnAgregar = document.querySelectorAll('.btnAgregar')

/*Obj Overview Amount */
const overviewAmount = {
    incomes: 0,
    expenses: 0,
    payments: 0,
    balance: 0 
} 


/*Funcion para que renderice los totales */
document.addEventListener('DOMContentLoaded',()=>{
    overview()
})

/*Funcion para obtener los datos */
btnAgregar.forEach( boton =>{
    boton.addEventListener('click', e =>{
        switch (e.target.value) {
            case 'incomes':
                    addTransaction(e)
                break;
        
            case 'expenses':
                addTransaction(e)
                break;
        
            case 'payments':
                addTransaction(e)
                break;
        
            case 'balances':
                addTransaction(e)
                break;
        
            default:
                break;
        }
    })
})

function addTransaction(e) {
    if (confirm("Nueva entrada?")) {
        let description = prompt('Description?')
        let amount = Number(prompt('Amount?'))
        let type = e.target.value
        let objTrans = {
            description,
            amount,
            type,
            id: Date.now(),
            date: new Date().toLocaleDateString()
        }
    guardarInfo(objTrans)
}
}

function guardarInfo(objTrans) {
    let transLocalStorage = JSON.parse(localStorage.getItem('transaction')) || []

    console.log(transLocalStorage)

    if (transLocalStorage.length === 0) {
        transLocalStorage.push(objTrans)
        localStorage.setItem('transaction',JSON.stringify(transLocalStorage))

        overview()
    } else {
        transLocalStorage.push(objTrans)
        localStorage.setItem('transaction',JSON.stringify(transLocalStorage))
        overview()
    }
}

function overview() {
    let transactionArray = JSON.parse(localStorage.getItem('transaction')) || []

    overviewAmount.incomes = transactionArray
    .filter( trans => trans.type === 'incomes')
    .reduce( (acc, actual)=>{
        return acc + actual.amount
    },0)

    overviewAmount.expenses = transactionArray
    .filter( trans => trans.type === 'expenses')
    .reduce( (acc, actual)=>{
        return acc + actual.amount
    },0)

    
    overviewAmount.payments = transactionArray
    .filter( trans => trans.type === 'payments')
    .reduce( (acc, actual)=>{
        return acc + actual.amount
    },0)

    
    overviewAmount.balances = transactionArray
    .filter( trans => trans.type === 'balances')
    .reduce( (acc, actual)=>{
        return acc + actual.amount
    },0)

    aumentarContador('incomes',overviewAmount.incomes)
    aumentarContador('expenses',overviewAmount.expenses)
    aumentarContador('payments',overviewAmount.payments)
    aumentarContador('balances',overviewAmount.balance)
    transRender(transactionArray)

}

function formatearNumero(numero) {
    return Number(numero).toLocaleString('en-US', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
})
}

function aumentarContador(type , amount) {
    const span = document.querySelector(`span.${type}`)
    span.textContent = `RD$ ${formatearNumero(amount)}` 
}

function transRender(transactions) {
    const existeLi = document.querySelector('.transaction-item_container')
    
    if (!existeLi) {
        transactions.forEach( trans =>{
        const ul = document.querySelector(`.ul-${trans.type}`)
        const li = document.createElement('LI')
        li.classList.add('transaction-item_container')

        li.innerHTML = `
        <div>
            <span class="transaction-item">${trans.date}</span>
            <span class="transaction-item">${trans.description}</span>
            <strong class="transaction-item">${formatearNumero(trans.amount)}</strong>
        </div>
        `
        ul.appendChild(li)
    })}
};

function limpiarHTML(ul) {
}