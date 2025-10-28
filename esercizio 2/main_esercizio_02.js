
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
    let somma = 0    
    array.forEach(numero =>{
    somma = somma + numero
    })
    return somma
} 


const numeri = generateArr()
const somma = sumArray(numeri)

console.log(`I numeri sono ${numeri.join(", ")} e la somma tra loro e': ${somma}`);

