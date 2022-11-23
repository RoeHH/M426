import { ZutatenDecorator } from "../ZutatenDecorator.ts";
import { Getränk } from "../Getraenk.ts";

export class Schoko extends ZutatenDecorator {
    constructor(public getraenk: Getränk) {
        super(getraenk.description);
    }
    
    public getDescription(): string {
        return this.getraenk.getDescription() + ", Schoko";
    }
    
    public getPreis(): number {
        return this.getraenk.getPreis() + 0.20;
    }
}