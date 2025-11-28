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
  nom: '',
  prenom: '',
  job: '',
  imageFilename: '',
  citation: '',
  description: '',
  motsCles: ''
};


 
 get imageUrl(): string {
  return this.cardData.imageFilename
    ? `assets/images/${this.cardData.imageFilename}`
    : 'assets/images/default-avatar.jpg';
}

}
