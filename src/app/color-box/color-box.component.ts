import { Component } from '@angular/core';

@Component({
  selector: 'app-color-box',
  imports: [],
  templateUrl: './color-box.component.html',
  styleUrl: './color-box.component.css'
})
export class ColorBoxComponent {
  divColor: string = 'lightgray'; 

  // méthode pour remettre la couleur par défaut
  resetColor(div: HTMLDivElement) {
    this.divColor = 'lightgray';
    div.style.backgroundColor = this.divColor;
  }

  // On va binder le changement de l'input avec un event binding
  changeColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.divColor = input.value;
  }

}
