import { Getränk } from '../Getraenk.ts';

export class Hausmischung extends Getränk {
    public Hausmischung() {
        this.description = 'Hausmischung';
    }
    
    public getPreis(): number {
        return 0.89;
    }
}