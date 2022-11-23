export abstract class Getränk {
  constructor(public description: string) {}

  public getDescription(): string {
    return this.description;
  }

  public abstract getPreis(): number;
}