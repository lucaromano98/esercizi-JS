// Crea 2 funzioni: 
// 1) Deve generare un arrat con numeri casuali
// 2) Deve sommare i numeri contenuti nell'array

const generateArr = () => {
    let arr = []
    const numeroElementi = 3
    const max = 100
    for(let i=0; i<numeroElementi; i++){
        arr.push(Math.floor(Math.random()*max))
    }
    return arr
}


const sumArray = (array) => {
    let sum = 0    
    array.forEach(numero =>{
    sum = somma + numero
    })
    return somma
} 


const number = generateArr()
const sum = sumArray(numeri)

console.log(`I numeri sono ${numeri.join(", ")} e la somma tra loro e': ${somma}`);

