import { Component, OnInit } from '@angular/core';
import { Oeuvre } from '../model/oeuvre.model';
import { Exposition } from '../model/exposition.model';
import { OeuvreService } from '../services/oeuvre.service';

@Component({
  selector: 'app-recherche-par-titre',
  templateUrl: './recherche-par-titre.component.html',
  styles: ``,
})
export class RechercheParTitreComponent implements OnInit {
  oeuvres!: Oeuvre[];
  allOeuvres!: Oeuvre[];
  IdExposition!: number;
  titre!: string;
  searchTerm!: string;
  expositions!: Exposition[];
  constructor(private oeuvreService: OeuvreService) {}
  rechercherOeuvrs() {
    this.oeuvreService.rechercherParTitre(this.titre).subscribe((oeuvs) => {
      this.oeuvres = oeuvs;
      console.log(oeuvs);
    });
  }

  /*ngOnInit(): void {
    this.oeuvreService.listeOeuvre().subscribe((oeuvs) => {
      console.log(oeuvs);
      this.allOeuvres = oeuvs;
    });
  }
  onKeyUp(filterText: string) {
    this.oeuvres = this.allOeuvres.filter(
      (item) =>
        item.titre &&
        item.titre.toLowerCase().includes(filterText.toLowerCase())
    );
  }*/

  ngOnInit(): void {
    this.oeuvreService.listeOeuvre().subscribe((oeuvs) => {
      console.log(oeuvs); // Vérifiez les données reçues
      this.allOeuvres = oeuvs;
      this.oeuvres = oeuvs; // Assurez-vous que oeuvres est initialisé ici
    });
  }

  onKeyUp() {
    console.log(this.searchTerm); // Vérifiez la valeur de searchTerm
  }
}
