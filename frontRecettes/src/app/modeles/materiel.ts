export class Materiel {
  constructor(
    public nom: string,
    public quantite: number,
    public obligatoire: boolean
  ) {}

  printToBack() : Object {
    return {
        nom: this.nom,
        quantite : this.quantite,
        obligatoire : this.obligatoire
    }
}
}
