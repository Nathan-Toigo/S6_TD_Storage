
export class Card{
    #value;

    constructor(value){
        this.#value = value;
    }

    get Value(){ return this.#value;}

    toData(){
        const cardBasicObject = {
            "value": this.#value,
            };
        return cardBasicObject;
    }
}