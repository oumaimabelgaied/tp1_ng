import { Component, input } from '@angular/core';
import { Cv } from '../cv.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  // Signal input
  cv = input<Cv | null>(null);
}