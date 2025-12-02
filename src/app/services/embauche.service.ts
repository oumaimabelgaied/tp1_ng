import { Injectable, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../cv/cv.model';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private _embauches = signal<Cv[]>([]);
  embauches = this._embauches.asReadonly();

  constructor(private toastr: ToastrService) {}

  embaucher(cv: Cv) {
    const existe = this._embauches().some((c) => c.id === cv.id);

    if (existe) {
      this.toastr.warning(
        `${cv.firstname} ${cv.name} est déjà embauché`,
        'CV Déjà sélectionné',
        { timeOut: 3000 }
      );
    } else {
      this._embauches.update((list) => [...list, cv]);
      this.toastr.success(
        `${cv.firstname} ${cv.name} a été embauché avec succès`,
        'Embauche réussie',
        { timeOut: 3000 }
      );
    }
  }

  getList() {
    return this._embauches();
  }

  supprimer(cv: Cv) {
    this._embauches.update((list) => list.filter((c) => c.id !== cv.id));
    this.toastr.info(
      `${cv.firstname} ${cv.name} a été supprimé`,
      'Suppression',
      { timeOut: 3000 }
    );
  }
}
