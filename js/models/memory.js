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
            this.#cards.push(card);
            this.#cards.push(card);
        }
    }

    getCardsNumber(){
        return this.#cards.length;
    }

    
    getCards(index){
        return this.#cards[index];
    }
}