import { Observer } from "../patterns/observer.js";

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

    displayCard(card,index){
        const cardsHTML = document.getElementsByClassName("cards")[0];
        const divHTML = document.createElement("div");
        divHTML.classList.add("card");
        divHTML.innerHTML = "&#x" + card.Value.toString(16);
        cardsHTML.appendChild(divHTML);
        if(card.FaceHidden){
            divHTML.classList.add("hidden");
        }
        divHTML.addEventListener("click",()=>{
            this.#controllerMemory.showCard(index);
        });
    }

    displayCards(){
        const cardsHTML = document.getElementsByClassName("cards")[0];
        cardsHTML.innerHTML = "";
        const cards = this.#controllerMemory.Memory.Cards;
        for(let i=0;i< cards.length;i++){
            this.displayCard(cards[i],i);
        }
    }
}