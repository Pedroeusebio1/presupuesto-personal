import { overview } from "../data/objects.js";

export default function loadingInfo(type, description, amount) {
    console.log({type, description, amount})

    switch (type) {
        case 'income':
            overview.incomesOverview = overview.incomesOverview + Number(amount)
            break;          

        case 'expenses':
            overview.expensesOverview = overview.expensesOverview + Number(amount)
            break;
    
        case 'payments':
            overview.paymentsOverview = overview.paymentsOverview + Number(amount)
            break;
    
        case 'balances':
            overview.balancesOverview = overview.balancesOverview + Number(amount)
            break;
        default:
            break;
    }
    
    localStorage.setItem('overview', JSON.stringify(overview) );
}