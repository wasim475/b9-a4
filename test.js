function checkName(name){
    if(name){
        return 'Invalid input'
        let reverseNameWords = name.split('').reverse()
    }
    else if(reverseNameWords[0].toLowerCase()=='a' || reverseNameWords[0].toLowerCase()== 'y' || reverseNameWords[0].toLowerCase()== 'i' || reverseNameWords[0].toLowerCase()== 'e' || reverseNameWords[0].toLowerCase()== 'o' || reverseNameWords[0].toLowerCase()== 'u' || reverseNameWords[0].toLowerCase()== 'w' ){
        return 'Good Name'
    }
    else{
        return 'Bad Name'
    }
}

let result = checkName(900)

console.log(result)