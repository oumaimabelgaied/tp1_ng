import { Component } from '@angular/core';
import { EmbaucheService } from '../../services/embauche.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-embauche',
  standalone: true,
  imports: [CommonModule], // ← Ajoutez ceci
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
})
export class EmbaucheComponent {
  constructor(public embaucheService: EmbaucheService) {}
}
