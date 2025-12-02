import { Component, input } from '@angular/core';
import { Cv } from '../cv.model';
import { EmbaucheService } from '../../services/embauche.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  cv = input<Cv | null>(null);

  constructor(
    private embaucheService: EmbaucheService,
    private router: Router
  ) {}

  embaucher() {
    const currentCv = this.cv();
    if (currentCv) {
      this.embaucheService.embaucher(currentCv);
    }
  }

  goToDetail(cv: Cv) {
    this.router.navigate(['/cv', cv.id]);
  }
}
