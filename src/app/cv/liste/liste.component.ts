import { Component, input, inject } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { Cv } from '../cv.model';
import { SelectionService } from '../../services/selection.service';

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

  // injection du service de sélection
  private selectionService = inject(SelectionService);

  // méthode appelée par le template si vous gardez (itemClicked)="onCvClick(cv)"
  onCvClick(cv: Cv) {
    this.selectionService.select(cv);
  }
}