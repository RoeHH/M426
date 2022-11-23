import { Getränk } from "../Getraenk.ts";

export class Espresso extends Getränk {

  constructor() {
    super("Espresso")
  }

  public getPreis(): number {
    return 1.99;
  }
}