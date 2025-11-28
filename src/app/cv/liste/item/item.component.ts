import { Component, input, output } from '@angular/core';
import { Cv } from '../../cv.model';

@Component({
  selector: 'app-item',
  standalone: true,
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  // Signal inputs
  cv = input.required<Cv>();
  isSelected = input<boolean>(false);
  
  // Signal output
  itemClicked = output<Cv>();

  onClick() {
    this.itemClicked.emit(this.cv());
  }
}