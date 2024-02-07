function checkName(name){
    if(typeof name === 'number'  || typeof name === 'object'){
        return 'Invalid';
    }
    else if(typeof name !== 'number'){

        let reverseNameWords = name.split('').reverse()

        if(reverseNameWords[0].toLowerCase()=='a' || reverseNameWords[0].toLowerCase()== 'y' || reverseNameWords[0].toLowerCase()== 'i' || reverseNameWords[0].toLowerCase()== 'e' || reverseNameWords[0].toLowerCase()== 'o' || reverseNameWords[0].toLowerCase()== 'u' || reverseNameWords[0].toLowerCase()== 'w' ){

            return 'Good Name';

        } else{
            return 'Bad Name'
        }
    }
    
   
}

let result = checkName('tonmoy')

console.log(result)