import { CardI } from "./CardI";

export class Deck {
    private cards: Array<CardI>;

    constructor(cards?: Array<CardI>) {
        if (cards) {
            this.cards = cards;
        } else {
            this.cards = [];
        }
    }
    public shufle(method: (cards: Array<CardI>) => Array<CardI>): void {
        this.cards = method(this.cards);
    }
    public draw(): CardI | boolean {
        if (this.cards.length > 0) {
            return this.cards.pop()!;
        }
        return false;
    }
}
