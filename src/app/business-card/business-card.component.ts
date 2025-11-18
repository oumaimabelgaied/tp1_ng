import { Component } from '@angular/core';
import { FormsModule as F, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



export interface CardData {
  nom: string;
  prenom: string;
  job: string;
  imageFilename: string;
  citation: string;
  description: string;
  motsCles: string;
}

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})
export class BusinessCardComponent {
   cardData: CardData = {
    nom: 'Votre Nom',
    prenom: 'Votre Prénom',
    job: 'Votre Profession',
    imageFilename: '',
    citation: 'Votre citation favorite',
    description: 'Décrivez votre travail',
    motsCles: 'key words'
  };

 
  get imageUrl(): string | null {
    return this.cardData.imageFilename
      ? `assets/${this.cardData.imageFilename}` 
      : null; 
  }
}
