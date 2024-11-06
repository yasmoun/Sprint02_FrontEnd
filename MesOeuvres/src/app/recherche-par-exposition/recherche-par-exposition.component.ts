import { Component, OnInit } from '@angular/core';
import { Oeuvre } from '../model/oeuvre.model';
import { Exposition } from '../model/exposition.model';
import { OeuvreService } from '../services/oeuvre.service';
@Component({
  selector: 'app-recherche-par-exposition',
  templateUrl: './recherche-par-exposition.component.html',
  styles: ``,
})
export class RechercheParExpositionComponent implements OnInit {
  oeuvres!: Oeuvre[];
  IdExposition!: number;
  expositions!: Exposition[];
  constructor(private oeuvreService: OeuvreService) {}

  ngOnInit(): void {
    this.oeuvreService.listeExpositions().subscribe((exps) => {
      this.expositions = exps._embedded.expositions;
      console.log(exps);
    });
  }

  onChange() {
    this.oeuvreService
      .rechercherParExposition(this.IdExposition)
      .subscribe((oeuvs) => {
        this.oeuvres = oeuvs;
      });
  }
}
