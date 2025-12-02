import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cv } from '../cv/cv.model';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  private selectedCvSubject = new Subject<Cv | null>();

  
  selectedCv$ = this.selectedCvSubject.asObservable();

  
  select(cv: Cv | null) {
    this.selectedCvSubject.next(cv);
  }
}