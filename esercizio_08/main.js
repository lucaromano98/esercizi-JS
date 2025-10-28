class Deck{
     constructor(){
        this.cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"]
        console.log("genero nuovo mazzo", this.cards);
        
     }   

     mischia(){
        this.cards.sort((a, b) => 0.5 - Math.random())
        
        console.log("Mazzo mischiato", this.cards);        
     }
     pesca(){

        const card = this.cards.pop()
        console.log("carta pescata", card)
        console.log("Mazzo dopo la pescata", this.cards);
        return card
                
     }
     mettiSotto(card){

        this.cards.unshift(card)
        console.log("Carte dopo aver messo la carta sotto", this.cards);
        

     }
}

const deck = new Deck()

deck.mischia()
const pesca = deck.pesca()
deck.mettiSotto(pesca)

