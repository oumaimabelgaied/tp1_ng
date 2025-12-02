import { Component, signal, inject, computed } from '@angular/core';
import { Cv } from './cv.model';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailComponent, EmbaucheComponent],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  private cvService = inject(CvService);

  // On utilise computed ici pour réagir aux changements du service (pour la consommation de l'api)
  cvList = computed(() => this.cvService.getCvs()());
  selectedCv = signal<Cv | null>(null);

  onSelectCv(cv: Cv) {
    this.selectedCv.set(cv);
  }
}
