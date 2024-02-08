
function monthlySavings(allPayments, LivingCost){
    if(Array.isArray(allPayments) && typeof LivingCost === 'number'){

        let totalPayment = 0;
        for(let payment of allPayments){
            if(payment>=3000){
                let tax = (payment*20)/100;
                payment = payment-tax;
            }
            totalPayment = totalPayment+payment;
        }
        
        let savings = totalPayment - LivingCost;

        if(savings>=0){
            return savings;
        }else{
            return 'Earn more.'
        }

    }else{
        return 'Invalid input'
    }
}

let result = monthlySavings(100, [ 900 , 2700 , 3400] )

console.log(result)