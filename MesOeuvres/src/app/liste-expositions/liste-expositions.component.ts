import { Component, Input, OnInit } from '@angular/core';
import { Exposition } from '../model/exposition.model';
import { OeuvreService } from '../services/oeuvre.service';

@Component({
  selector: 'app-liste-expositions',
  templateUrl: './liste-expositions.component.html',
  styles: ``,
})
export class ListeExpositionsComponent implements OnInit {
  expositions!: Exposition[];
  updatedExp: Exposition = { idExposition: 0, nom: '' };
  ajout: boolean = true;
  constructor(private oeuvreService: OeuvreService) {}
  ngOnInit(): void {
    this.oeuvreService.listeExpositions().subscribe((exps) => {
      this.expositions = exps._embedded.expositions;
      console.log(exps);
    });
  }
  expositionUpdated(updatedExposition: Exposition) {
    // Implémentez la logique pour mettre à jour l'exposition ici
    const index = this.expositions.findIndex(
      (exp) => exp.idExposition === updatedExposition.idExposition
    );
    if (index !== -1) {
      this.expositions[index] = updatedExposition; // Met à jour l'exposition dans la liste
    }
  }

  updateExp(exp: Exposition) {
    this.updatedExp = exp;
    this.ajout = false;
  }


}
