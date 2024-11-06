import { Component, OnInit } from '@angular/core';
import { Oeuvre } from '../model/oeuvre.model';
import { OeuvreService } from '../services/oeuvre.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-oeuvres',
  templateUrl: './oeuvres.component.html',
})
export class OeuvresComponent implements OnInit {
  oeuvres: Oeuvre[] = [];

  constructor(
    private oeuvreService: OeuvreService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerOeuvres();
  }

  loadOeuvres(): void {
    this.oeuvreService.listeOeuvre().subscribe((prods) => {
      this.oeuvres = prods;
    });
  }

  chargerOeuvres() {
    this.oeuvreService.listeOeuvre().subscribe((prods) => {
      console.log(prods);
      this.oeuvres = prods;
    });
  }

  supprimerOeuvre(p: Oeuvre) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf && p.idOeuvre !== undefined) {
      // Vérifiez si idOeuvre est défini
      this.oeuvreService.supprimerOeuvre(p.idOeuvre).subscribe(() => {
        console.log('œuvre supprimée');
        this.chargerOeuvres();
      });
    } else {
      console.error("L'ID de l'œuvre est manquant.");
      alert("Impossible de supprimer l'œuvre, l'ID est manquant.");
    }
  }
}
