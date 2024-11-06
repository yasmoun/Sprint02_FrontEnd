import { Component, Input, OnInit } from '@angular/core';
import { Oeuvre } from '../model/oeuvre.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OeuvreService } from '../services/oeuvre.service';
import { Exposition } from '../model/exposition.model';

@Component({
  selector: 'app-update-oeuvre',
  templateUrl: './update-oeuvre.component.html',
  styles: ``,
})
export class UpdateOeuvreComponent implements OnInit {
  currentOeuvre!: Oeuvre; // Utiliser le point d'exclamation pour indiquer que cela sera initialisé
  expositions: Exposition[] = []; // Initialisation avec un tableau vide
  updatedExpId: number = 0; // Initialisation avec une valeur par défaut

 

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private oeuvreService: OeuvreService
  ) {}

  ngOnInit(): void {
    this.oeuvreService.listeExpositions().subscribe((exps) => {
      console.log(exps);
      this.expositions = exps._embedded.expositions;
    });
    this.oeuvreService
      .consulterOeuvre(this.activatedRoute.snapshot.params['id'])
      .subscribe((exp) => {
        this.currentOeuvre = exp;
        this.updatedExpId = this.currentOeuvre.exposition?.idExposition ?? 0;
      });
  }

  updateOeuvre() {
    this.currentOeuvre.exposition = this.expositions.find(
      (exp) => exp.idExposition == this.updatedExpId
    )!;
    this.oeuvreService.updateOeuvre(this.currentOeuvre).subscribe((exp) => {
      this.router.navigate(['oeuvres']);
    });
  }
}
