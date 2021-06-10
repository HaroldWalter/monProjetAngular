export type Graduation = 0 | 1 | 2 | 3 | 4 | 5;

export class Indicateurs {
  public tpsTotal : number;
  constructor(
    public tpsCuisson: number,
    public tpsPreparation: number,
    public tpsVaisselle: number = 0,
    public difficulte: Graduation,
    public cout: Graduation,
    public nbPersonne: number
  ) {
    this.tpsTotal = tpsCuisson + tpsPreparation + tpsVaisselle;
  }
}
