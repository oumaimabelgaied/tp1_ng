import { Component, input, signal } from '@angular/core';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';
import { Cv } from './cv.model';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailComponent],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {

  cvList = signal<Cv[]>([
    {
      id: 1,
      name: 'belgaied',
      firstname: 'wael',
      age: 23,
      cin: '12345678',
      job: 'Formateur Angular',
      path: 'assets/images/image3.png'
    },
    {
      id: 2,
      name: 'oueslati',
      firstname: 'asma',
      age: 18,
      cin: '87654321',
      job: 'Étudiante',
      path: 'assets/images/image1.png'
    },
    {
      id: 3,
      name: 'Ben Ali',
      firstname: 'Mohamed',
      age: 28,
      cin: '11223344',
      job: 'Développeur Full Stack',
      path: 'assets/images/image2.png'
    }
  ]);

  
  // Signal pour gérer le CV sélectionné
  selectedCv = signal<Cv | null>(null);

  onSelectCv(cv: Cv) {
    this.selectedCv.set(cv);
  }
}