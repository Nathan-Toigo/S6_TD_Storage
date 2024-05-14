import { Card } from "../models/card.js";
import { Memory } from "../models/memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    #memory;

    get Memory(){return this.#memory;}

    constructor()
    {
        super();
        this.#memory = new Memory();
    }

    newGame(){
        this.#memory.newGame(10);
        this.notify()
    }

}