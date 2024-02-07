function deleteInvalids(array){
    
    if(Array.isArray(array)){
        let numbers = [];
        for(let item of array){
            if(typeof item==='number' && !isNaN(item)){
                numbers.push(item)
            }
        }

        return numbers;

    }else{
        return 'Invalid Array'
    }
  
    
}

let result =deleteInvalids({num: [ 1 , 2 , 3 ]});

console.log(result)