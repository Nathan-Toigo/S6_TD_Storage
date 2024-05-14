import { Card } from "../models/card.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    #card;

    

    constructor()
    {
        super();
    }

    createCard(){
        const randm = Math.floor(Math.random() * 243) + 0x1F90C;
        this.#card = new Card(randm);
        this.notify();
    }

    get Card(){return this.#card;}
}