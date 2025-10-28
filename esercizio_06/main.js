// Creiamo la classe Tabella che prende i dati costanti esterne che sono un array che sono i nomi delle colonne
// e un oggetto contente altri array con chiave valore

class Tabella {
    // serve per prendere i dati
    nomiColonne;
    data;

    // il nostro constructor
    constructor(nomiColonne, data){
        this.nomiColonne = nomiColonne
        this.data = data
        this.generaTabella()
        
    }

    // funzione per mostrare la tabella a schermo
    generaTabella(){
        const tabella = document.createElement("table");
        tabella.appendChild(this.generaColonne())        
        tabella.appendChild(this.generaRighe())        
        document.querySelector("body").appendChild(tabella)

    }

    //funzione per creare le colonne
    generaColonne(){
        const thead = document.createElement("thead")
        this.nomiColonne.forEach( nomeColonna=> {
            const th = document.createElement("th")
            th.textContent = nomeColonna
            thead.appendChild(th)
        });
        return thead
    }

    //funzione per creare le righe
    generaRighe(){
        const tbody = document.createElement("tbody")
        this.data.forEach((riga) => {
            const tr = document.createElement("tr")
            //considerato che qui stiamo passando un array di oggetti la classe Object ci permette di fare un forEach su un array di oggetti
            // quindi per ogni riga crea un td e inserisci come testo il vaolore della chiave
            Object.keys(riga).forEach((key) => {
                const cella = document.createElement("td")
                cella.textContent = riga[key]
                tr.appendChild(cella)
            })
            tbody.appendChild(tr)
        })
        return tbody
    }
}

// dati delle nostre colonne
const nomiColonne1 = ['id', 'nome', 'cognome', 'email', 'codice fiscale', 'indirizzo']

const nomiColonne2 = ['id', 'prodotto', 'prezzo']

// dati delle nostre righe
const data1 = [
    {id:1, nome: 'luca', cognome: 'romano', email: 'luca.romano@gmaail.com', codiceFiscale: "lcurom99f07894e", indirizzo:'via torino'},
    {id:1, nome: 'luca', cognome: 'romano', email: 'luca.romano@gmaail.com', codiceFiscale: "lcurom99f07894e", indirizzo:'via torino'},
    {id:1, nome: 'luca', cognome: 'romano', email: 'luca.romano@gmaail.com', codiceFiscale: "lcurom99f07894e", indirizzo:'via torino'},
    {id:1, nome: 'luca', cognome: 'romano', email: 'luca.romano@gmaail.com', codiceFiscale: "lcurom99f07894e", indirizzo:'via torino'},
    {id:1, nome: 'luca', cognome: 'romano', email: 'luca.romano@gmaail.com', codiceFiscale: "lcurom99f07894e", indirizzo:'via torino'}
]

const data2 = [
    {
        id: 1,
        prodotto: "Playstation 5",
        prezzo: "500"
    },
    {
        id: 2,
        prodotto: "Pc Gaming",
        prezzo: "2500"
    },
    {
        id: 3,
        prodotto: "Nintendo Switch",
        prezzo: "250"
    },
    
]

// creazione delle due tabelle
const tabella1 = new Tabella(nomiColonne1, data1)

const tabella2= new Tabella(nomiColonne2, data2)