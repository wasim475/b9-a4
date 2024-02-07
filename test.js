
function arrays(arr){
    if(Array.isArray(arr)){
        return 'valid'
    }
    else{
        return 'Invalid'
    }
}

let result = arrays(12)

console.log(result)