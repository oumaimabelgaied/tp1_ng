import { Component, input, inject } from '@angular/core';
import { Cv } from '../../cv.model';
import { SelectionService } from '../../../services/selection.service';

@Component({
  selector: 'app-item',
  standalone: true,
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  
  cv = input.required<Cv>();
  isSelected = input<boolean>(false);

 
  private selectionService = inject(SelectionService);

  onClick() {
    
    this.selectionService.select(this.cv());
  }
}