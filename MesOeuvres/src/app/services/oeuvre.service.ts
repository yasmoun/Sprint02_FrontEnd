import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Oeuvre } from '../model/oeuvre.model';
import { Exposition } from '../model/exposition.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExpositionWrapper } from '../model/ExpositionWrapped.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class OeuvreService {
  oeuvres: Oeuvre[] = [];
  oeuvre!: Oeuvre;
  expositions: Exposition[] = [];

  apiURL: string = 'http://localhost:8080/oeuvres/api';
  apiURLExp: string = 'http://localhost:8080/oeuvres/exp';

  constructor(private http: HttpClient, private authService: AuthService) {}

  listeOeuvre(): Observable<Oeuvre[]> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get<Oeuvre[]>(this.apiURL + '/all', {
      headers: httpHeaders,
    });
  }

  supprimerOeuvre(id: number) {
    const url = `${this.apiURL}/deloeuv/${id}`;
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.delete(url, { headers: httpHeaders });
  }
  ajouterOeuvre(oeuv: Oeuvre): Observable<Oeuvre> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.post<Oeuvre>(this.apiURL + '/addoeuv', oeuv, {
      headers: httpHeaders,
    });
  }

  /* supprimerOeuvre(oeuv: Oeuvre) {
    //supprimer le produit prod du tableau produits
    const index = this.oeuvres.indexOf(oeuv, 0);
    if (index > -1) {
      this.oeuvres.splice(index, 1);
    }
    //ou Bien
      this.produits.forEach((cur, index) => {
         if(prod.idProduit === cur.idProduit) {
               this.produits.splice(index, 1);
            }
      });
  }*/

  consulterOeuvre(id: number): Observable<Oeuvre> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get<Oeuvre>(url, { headers: httpHeaders });
  }

  updateOeuvre( prod: Oeuvre): Observable<Oeuvre> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.put<Oeuvre>(this.apiURL + '/updateoeuv', prod, {
      headers: httpHeaders,
    });
  }

  trierOeuvres() {
    this.oeuvres = this.oeuvres.sort((n1, n2) => {
      if (n1.idOeuvre! > n2.idOeuvre!) {
        return 1;
      }
      if (n1.idOeuvre! < n2.idOeuvre!) {
        return -1;
      }
      return 0;
    });
  }

  listeExpositions(): Observable<ExpositionWrapper> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get<ExpositionWrapper>(this.apiURLExp, {
      headers: httpHeaders,
    });
  }

  consulterExposition(id: number): Exposition {
    return this.expositions.find((exp) => exp.idExposition == id)!;
  }

  rechercherParExposition(idExposition: number): Observable<Oeuvre[]> {
    const url = `${this.apiURL}/oeuvsExp/${idExposition}`;
    return this.http.get<Oeuvre[]>(url);
  }

  rechercherParTitre(titre: string): Observable<Oeuvre[]> {
    const url = `${this.apiURL}/oeuvresByTitle/${titre}`;
    return this.http.get<Oeuvre[]>(url);
  }
}
