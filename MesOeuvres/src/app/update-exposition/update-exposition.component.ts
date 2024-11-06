import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Exposition } from '../model/exposition.model';
import { ExpositionService } from '../services/exposition.service';

@Component({
  selector: 'app-update-exposition',
  templateUrl: './update-exposition.component.html',
  styles: ``,
})
export class UpdateExpositionComponent implements OnInit {
  @Input() exposition!: Exposition;
  @Output() expositionUpdated = new EventEmitter<Exposition>();
  @Input() ajout!: boolean;
  constructor(private expositionService: ExpositionService) {} 

  ngOnInit(): void {
    if (!this.exposition) {
      this.exposition = new Exposition(); 
    }
    console.log('ngOnInit du composant UpdateExposition ', this.exposition);
  }

  saveExposition() {
  if (this.ajout) {
    this.expositionService.createExposition(this.exposition).subscribe(
      (response) => {
        this.expositionUpdated.emit(response);
        console.log('Exposition ajoutée avec succès : ', response);
      },
      (error) => {
        console.error("Erreur lors de l'ajout de l'exposition : ", error);
      }
    );
  } else {
    this.expositionService.updateExposition(this.exposition).subscribe(
      (response) => {
        this.expositionUpdated.emit(response);
        console.log('Exposition modifiée avec succès : ', response);
      },
      (error) => {
        console.error("Erreur lors de la modification de l'exposition : ", error);
      }
    );
  }
}
}
