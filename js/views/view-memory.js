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
        this.displayCard()
    }

    displayCard(){
        const card = this.#controllerMemory.Card;
        const httpCards = document.getElementsByClassName("cards")[0];
        const divHTML = document.createElement("div");
        divHTML.classList.add("card");
        divHTML.innerHTML = "&#x" + card.value.toString(16);
        httpCards.appendChild(divHTML);
    }
}