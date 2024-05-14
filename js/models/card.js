
export class Card{
    #value;
    #faceHidden;

    constructor(value){
        this.#value = value;
        this.#faceHidden = true;
    }

    get Value(){ return this.#value;}
    get FaceHidden(){ return this.#faceHidden;}

    toData(){
        const cardBasicObject = {
            "value": this.#value,
            "faceHidden":this.#faceHidden
            };
        return cardBasicObject;
    }

    show(){
        this.#faceHidden = false;
    }

    hide(){
        this.#faceHidden = true;
    }
}