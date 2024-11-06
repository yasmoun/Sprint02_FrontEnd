import { Component, OnInit } from '@angular/core';
import { Oeuvre } from '../model/oeuvre.model';
import { OeuvreService } from '../services/oeuvre.service';
import { Exposition } from '../model/exposition.model';
import { Router } from '@angular/router';
import exp from 'constants';

@Component({
  selector: 'app-add-oeuvre',
  templateUrl: './add-oeuvre.component.html',
})
export class AddOeuvreComponent implements OnInit {
  newOeuvre = new Oeuvre();
  expositions!: Exposition[];
  newIdExposition!: number;
  newExposition!: Exposition;

  constructor(private oeuvreService: OeuvreService, private router: Router) {}
  addOeuvre() {
    this.newOeuvre.exposition = this.expositions.find(
      (exp) => exp.idExposition == this.newIdExposition
    )!;
    this.oeuvreService.ajouterOeuvre(this.newOeuvre).subscribe((exp) => {
      console.log(exp);
      this.router.navigate(['oeuvres']);
    });
  }
  ngOnInit(): void {
     this.oeuvreService.listeExpositions().subscribe((exps) => {
       console.log(exps);
       this.expositions = exps._embedded.expositions;
     });
  }
}
