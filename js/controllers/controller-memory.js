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
        this.saveGame();
    }

    saveGame(){
        const memoryBasicObject = this.#memory.toData();
        const JSONMemoryBasic = JSON.stringify(memoryBasicObject);
        localStorage.setItem("memory", JSONMemoryBasic);
    }

    loadGame(){
        const JSONMemoryBasic = localStorage.getItem("memory");
        if(JSONMemoryBasic){
            const memoryBasicObject = JSON.parse(JSONMemoryBasic);
            this.#memory.fromData(memoryBasicObject);
        }
        this.notify();
        return JSONMemoryBasic;
    }

    start(){
        const notNewgame = this.loadGame();
        if(!notNewgame){
            this.newGame();
        }
    }
}