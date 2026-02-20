/*Selectores */

const btnAgregar = document.querySelectorAll('button')

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
    aumentarContador('balances',overviewAmount.balances)
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
    
    transactions.forEach( trans =>{

        switch (trans.type) {
            case 'incomes':
                const ul = document.querySelector(`ul-${trans.type}`)
                const li = document.createElement('LI')
                const spanDate = document.createElement('SPAN')
                const spanDesc = document.createElement('SPAN')
                const strong = document.createElement('STRONG')

                spanDate.textContent = trans.date
                spanDesc.textContent = trans.description
                strong.textContent = trans.amount

                li.append(spanDate, spanDesc, strong)


                
                break;
        
            case 'expenses':
                
                break;
        
            case 'payments':
                
                break;
        
            case 'balances':
                
                break;
        
            default:
                break;
        }
    })
}