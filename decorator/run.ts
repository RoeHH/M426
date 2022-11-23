import { Milch } from "./Decorators/Milch.ts";
import { Schoko } from "./Decorators/Schoko.ts";
import { Getränk } from "./Getraenk.ts";
import { Espresso } from "./Getraenke/Espresso.ts";

let getränk: Getränk = new Espresso();
console.log(getränk.getDescription() + " $" + getränk.getPreis());
getränk = new Schoko(getränk);
console.log(getränk.getDescription() + " $" + getränk.getPreis());
getränk = new Schoko(getränk);
console.log(getränk.getDescription() + " $" + getränk.getPreis());
getränk = new Milch(getränk);
console.log(getränk.getDescription() + " $" + getränk.getPreis());