export class Etapes {
  constructor(
    public ordre: number,
    public description: string,
    public obligatoire: boolean
  ) {}

  printToBack() : Object {
    return {
        ordre: this.ordre,
        description: this.description,
        obligatoire: this.obligatoire
    }
}
}
