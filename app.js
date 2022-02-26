const init = require ("readline-sync")

const numero = [3,6,9,8,6,4]

function imprimemaioremenor(arr){

let maior=0
let menor=10

for(let i = 0; i < arr.length; i++){
    if(arr[i]> maior){
        maior = arr[i]
    }
    if(arr[i] < menor) {
      menor = arr[i]

    }
    }
    return `o maior número é ${maior} e o menor número é ${menor}`
    }

    console.log(imprimemaioremenor(numero))