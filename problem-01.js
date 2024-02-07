
function calculateMoney(numberOfTicket){
    let ticketPrice= 120;
    if(numberOfTicket<0){
        return 'Invalid Number.'
    }
    else if(numberOfTicket>=0){
       let totalTicketPrice= numberOfTicket*ticketPrice;
       let dailyCost = 500 + (50*8);
       let remainingMoney = totalTicketPrice - dailyCost;
       return remainingMoney;
    }
}

let result = calculateMoney(10);

console.log(`Today's income of baker bhai: ${result}`)