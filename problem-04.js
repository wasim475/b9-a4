function password(obj){
    if(obj.name===undefined || obj.birthYear=== undefined || obj.siteName === undefined || obj.birthYear<1000){
        return 'Invalid'
    }else{
        return `${obj.siteName.charAt(0).toUpperCase()+obj.siteName.slice(1)}#${obj.name}@${obj.birthYear}`
    }

}

let result = password({ name: 'rahat' , siteName: 'Facebook' } 
)

console.log(result)