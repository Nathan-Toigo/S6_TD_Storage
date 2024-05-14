import { Card } from "./card.js";


export class Memory{
    #cards;
    #turnedCard;

    get Cards(){return this.#cards;}

    constructor(){
        this.#cards = [];
        this.#turnedCard = [];
    }

    newGame(pairsNumber){
        for(let i=0;i<pairsNumber;i-=-1){
            const codeEmote = 0x1F90C + i;
            const card = new Card(codeEmote);
            const randomPosition = Math.floor(Math.random() * this.#cards.length);
            this.#cards.splice(randomPosition,0,card);
            const randomPosition2 = Math.floor(Math.random() * this.#cards.length);
            this.#cards.splice(randomPosition2,0,card);
        }
    }

    getCardsNumber(){
        return this.#cards.length;
    }

    
    getCards(index){
        return this.#cards[index];
    }

    toData(){
        const JSONcards = [];
        for(let i = 0;i<this.#cards.length;i++){
           JSONcards[i] = this.#cards[i].toData();
        }
        const memoryBasicObject = {
            "cards" : JSONcards
        };

        return memoryBasicObject;
    }

    fromData(memoryBasicObject){
        this.#cards = [];
        const arrayCards = memoryBasicObject["cards"];
        for(let i=0;i<arrayCards.length;i++){
            const card = new Card(arrayCards[i]["value"]);
            if(!arrayCards[i]["faceHidden"])
                card.show();
            this.#cards.push(card);
        }
    }

    showCard(index){
        const currentCard = this.#cards[index];

        if(currentCard.FaceHidden == false){
            //On fait rien
        }
        if(currentCard.FaceHidden == true && this.#turnedCard.length == 0){
            this.#turnedCard.push(index);
            this.#cards[index].show();
        }
        if(this.#turnedCard.length == 1)
        {
            if(currentCard.FaceHidden == true && this.#cards[this.#turnedCard[0]].Value == currentCard.Value)
                {
                    this.#cards[index].show();
                    this.#turnedCard = [];
                    return "winningCards";
                }

            if(currentCard.FaceHidden == true){
                    this.#cards[index].show();
                    return "turnVisible";
            }
        }
        
    }

    turnVisibleCard(index){
        this.#cards[index].hide();
        this.#cards[this.#turnedCard[0]].hide();
        this.#turnedCard = [];
    }

    testWin(){
        let win = true;
        for(let card of this.#cards){
            if(card.FaceHidden == true)
            {
                win = false;
            }
        }
        if(win==true)
            {
                console.log("vous avez gagné");
            }
    }
}