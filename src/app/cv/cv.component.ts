import { Component, signal, inject, computed, OnDestroy } from '@angular/core';
import { Cv } from './cv.model';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { CvService } from '../services/cv.service';
import { SelectionService } from '../services/selection.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailComponent, EmbaucheComponent],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnDestroy {
  private cvService = inject(CvService);
  private selectionService = inject(SelectionService);

 
  cvList = computed(() => this.cvService.getCvs()());
  selectedCv = signal<Cv | null>(null);

  private sub: Subscription;

  constructor() {
    
    this.sub = this.selectionService.selectedCv$.subscribe(cv => {
      this.selectedCv.set(cv);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  
}