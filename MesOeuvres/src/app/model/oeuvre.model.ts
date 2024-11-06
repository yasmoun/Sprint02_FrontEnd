import { Exposition } from "./exposition.model";

export class Oeuvre {
  idOeuvre?: number;
  titre?: string;
  artiste?: string;
  dateCreation?: Date;
  categorie?: string;
  dimensions?: string;
  description?: string;
  prix?: number;
  exposition!:Exposition
}
