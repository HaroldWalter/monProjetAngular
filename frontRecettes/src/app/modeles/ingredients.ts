export class Ingredients {
  constructor(
    public nom: string,
    public quantite: number,
    public unite: string,
    public obligatoire: boolean
    
  ) {}

  printToBack() : Object {
    return {
        nom: this.nom,
        quantite : this.quantite,
        obligatoire: this.obligatoire,
        unite: this.unite
    }
}
}
