import { Component, input, output } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { Cv } from '../cv.model';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  // Signal inputs
  cvList = input.required<Cv[]>();
  selectedCvId = input<number | null>(null);
  
  // Signal output
  cvSelected = output<Cv>();

  onCvClick(cv: Cv) {
    this.cvSelected.emit(cv);
  }
}