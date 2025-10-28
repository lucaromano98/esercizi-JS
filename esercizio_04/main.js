// Creiamo una funzione che crea le card da un dataset interno, piu avanti andranno prese da API o file json per adesso ed esercitazione abbiamo utilizzato 
// bootstrap per creare una card e creato un array di oggetti che abbiamo creato custom. 

const arr = [
    {
        url:"https://images.unsplash.com/photo-1761509403385-3310e24c2b7f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
        title: "Una Card Bellissima",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut voluptas nemo quia sed voluptate reprehenderit quasi eos commodi esse"

    },
    {
        url:"https://images.unsplash.com/photo-1761470758032-42acd372d6f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        title: "Card 2",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut voluptas nemo quia sed voluptate reprehenderit quasi eos commodi esse"

    },
    {
        url:"https://images.unsplash.com/photo-1733736900157-8cbdb516a335?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        title: "Card Meno Bella",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut voluptas nemo quia sed voluptate reprehenderit quasi eos commodi esse"

    },
]

// andiamo a ciclare sull'array degli oggetti in modo che per ogni elemento dell'arrei crei la card
arr.forEach((arrayOggetti) => {
    createCard(arrayOggetti)
})

// la nostra matriosca per creare la card e quindi creiamo la funzione la funzione

function createCard(data){

    // creiamo il nostro div contenitore dove contiene tutta la card
    const card = document.createElement("div") 
    card.className = "col-3"

    // ora creiamo il nostro div con all'interno gli elementi della card
    const innerDiv = document.createElement("div")
    innerDiv.className ="card mt-3" 
    card.appendChild(innerDiv)

    // immagine
    const img = document.createElement("img")
    img.src = data.url
    img.className ="card-img-top"
    innerDiv.appendChild(img)

    // div che contiene i testi dell'immagine, il titolo ed il paragrafo ed il bottono
    const textContainer = document.createElement("div")
    textContainer.className = "card-body shadow-lg p-3  bg-body-teritiary rounded"
    innerDiv.appendChild(textContainer)

    // titolo
    const title = document.createElement("h5")
    title.className ="card-title"
    title.textContent = data.title
    textContainer.appendChild(title)

    // paragrafo
    const desc = document.createElement("p")
    desc.className ="card-text"
    desc.textContent = data.desc
    textContainer.appendChild(desc)

    // bottone
    const btn = document.createElement("a")
    btn.href = "#"
    btn.className ="btn btn-primary"
    btn.textContent="Go somewhere"
    textContainer.appendChild(btn)

    //infine per visualizzarle a schermo dobbiamo appende le card al contenitore generale delle card
    document.getElementById("container").appendChild(card)
    


}