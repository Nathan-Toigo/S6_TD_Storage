import { Observer } from "../patterns/observer.js";
import { Card } from "../models/card.js";

export class ViewMemory extends Observer
{
    #controllerMemory;

    constructor(controllerMemory)
    {
        super();

        this.#controllerMemory = controllerMemory;
        this.#controllerMemory.addObserver(this);
    }

    notify()
    {
        this.displayCards();
    }

    displayCard(card){
        const cardsHTML = document.getElementsByClassName("cards")[0];
        const divHTML = document.createElement("div");
        divHTML.classList.add("card");
        divHTML.innerHTML = "&#x" + card.Value.toString(16);
        cardsHTML.appendChild(divHTML);
        divHTML.addEventListener("click",()=>{
            this.#controllerMemory.createCard();
        });
    }

    displayCards(){
        const cards = this.#controllerMemory.Memory.Cards;
        for(let i=0;i< cards.length;i++){
            this.displayCard(cards[i]);
        }
    }
}