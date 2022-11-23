import { Getränk } from "./Getraenk.ts";

export abstract class ZutatenDecorator extends Getränk {
  public abstract getDescription(): string;
}