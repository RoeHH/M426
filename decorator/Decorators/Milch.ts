import { ZutatenDecorator } from "../ZutatenDecorator.ts";
import { Getränk } from "../Getraenk.ts";

export class Milch extends ZutatenDecorator {
    constructor(public getraenk: Getränk) {
        super(getraenk.description);
    }
    
    public getDescription(): string {
        return this.getraenk.getDescription() + ", Milch";
    }
    
    public getPreis(): number {
        return this.getraenk.getPreis() + 99;
    }
}