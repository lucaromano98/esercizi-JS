const oggi = new Date();

const options = [
    {
        year:"numeric",
        day:"2-digit",
        month:"2-digit",
        weekday:"long"
    },
    {
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:true
    },
    {
        weekday:"short",
        day:"2-digit",
        month:"2-digit",
        year:"numeric"
    }
]
;


options.forEach(option =>{
    const element = document.createElement("h2")
    const dataFormat = oggi.toLocaleString(undefined, option)
    const text = document.createTextNode(dataFormat)
    element.appendChild(text)
    document.querySelector("body").appendChild(element)
})