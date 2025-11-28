import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-box',
  imports: [FormsModule],
  templateUrl: './color-box.component.html',
  styleUrl: './color-box.component.css'
})

export class ColorBoxComponent {
  defaultColor = 'lightgray';
  divColor = this.defaultColor;

  // reset
  resetColor(myDiv: HTMLDivElement , colorInput : HTMLInputElement) {
    colorInput.value = '';
    this.divColor = this.defaultColor;
    myDiv.style.backgroundColor = this.defaultColor; 
  }
}
