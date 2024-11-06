import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exposition } from '../model/exposition.model';

@Injectable({
  providedIn: 'root',
})
export class ExpositionService {
  private apiUrl = 'http://localhost:8080/oeuvres/api/exp'; // Assurez-vous que cette URL est correcte.

  constructor(private http: HttpClient) {}

  // Méthode pour créer une exposition
  createExposition(exposition: Exposition): Observable<Exposition> {
    return this.http.post<Exposition>(this.apiUrl, exposition);
  }
  updateExposition(exposition: Exposition): Observable<Exposition> {
    return this.http.put<Exposition>(
      `${this.apiUrl}/${exposition.idExposition}`,
      exposition
    );
  }
}
