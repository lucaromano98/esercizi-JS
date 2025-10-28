const data = [
    {
        id: 1,
        nome: "luca",
        cognome: "romano",
        email: "luca.romano@gmail.it",
        codiceFiscale: "luarom98l06f839t",
        indirizzo: "via torino"
    },
    {
        id: 2,
        nome: "marco",
        cognome: "verdi",
        email: "marco.verdi@gmail.it",
        codiceFiscale: "mrcvrd72a28f839e",
        indirizzo: "via napoli"
    },
]

const table = document.getElementById("tabella")

data.forEach( element => {
    const row = document.createElement("tr");

    Object.keys(element).forEach(key =>{
        const col = document.createElement("td")
        col.textContent = element[key]
        row.appendChild(col)
        
    })

    table.appendChild(row);
})