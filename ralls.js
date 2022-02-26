const init = require ("readline-sync")

const numeros = [1,2,3,4,5,6,7]

function soma(){

    let calcular=0

    for(let  i = 0; i < numeros.length; i++){  
      calcular +=numeros [i]
    
    }

    return `a soma de todos os numeros é ${calcular}`
}

 console.log(soma(numeros))
//estou cansada//