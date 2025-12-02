import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cv } from '../cv/cv.model';
import { of, catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class CvService {
  private apiUrl = 'https://apilb.tridevs.net/api';

  private fakeCvs: Cv[] = [
    {
      id: 1,
      name: 'Talbi',
      firstname: 'Hamza',
      age: 23,
      cin: 11223388,
      job: 'Platform Engineer',
      path: 'assets/images/image4.jpg',
    },
    {
      id: 2,
      name: 'belgaied',
      firstname: 'wael',
      age: 23,
      cin: 12345678,
      job: 'Formateur Angular',
      path: 'assets/images/image3.png',
    },
    {
      id: 3,
      name: 'oueslati',
      firstname: 'asma',
      age: 18,
      cin: 87654321,
      job: 'Étudiante',
      path: 'assets/images/image1.png',
    },
    {
      id: 4,
      name: 'Ben Ali',
      firstname: 'Mohamed',
      age: 28,
      cin: 11223344,
      job: 'Développeur Full Stack',
      path: 'assets/images/image2.png',
    },
  ];

  private cvs = signal<Cv[]>(this.fakeCvs);

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.loadCvs();
  }

  loadCvs() {
    this.http
      .get<Cv[]>(`${this.apiUrl}/personnes`)
      .pipe(
        catchError(() => {
          this.toastr.error(
            "Impossible de récupérer les CVs depuis l'API. Affichage des données locales.",
            'Erreur de connexion',
            { timeOut: 5000 }
          );
          this.cvs.set(this.fakeCvs);
          return of(null);
        })
      )
      .subscribe((data) => {
        if (data && data.length > 0) {
          this.cvs.set(data);
          this.toastr.success('CVs chargés avec succès', 'Succès', {
            timeOut: 2000,
          });
        }
      });
  }

  getCvs() {
    return this.cvs;
  }

  getCvById(id: number): Cv | undefined {
    return this.cvs().find((cv) => cv.id === id);
  }

  deleteCv(id: number) {
    this.cvs.update((cvs) => cvs.filter((cv) => cv.id !== id));
    return of(null);
  }
}
