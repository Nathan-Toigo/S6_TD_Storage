import { Card } from "./card.js";


export class Memory{
    #cards;

    get Cards(){return this.#cards;}

    constructor(){
        this.#cards = [];
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
}