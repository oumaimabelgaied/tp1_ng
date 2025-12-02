import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../../services/cv.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ConfirmModalComponent } from '../../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-cv-detail',
  standalone: true,
  imports: [CommonModule, ConfirmModalComponent],
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css'],
})
export class CvDetailComponent implements OnInit {
  cv: any = null;
  loading = true;
  showDeleteModal = false;

  constructor(
    private route: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.cv = this.cvService.getCvById(id);
    this.loading = false;

    if (!this.cv) {
      this.toastr.error('CV non trouvé');
      this.router.navigate(['/cv']);
    }
  }

  openDeleteModal() {
    this.showDeleteModal = true;
  }

  onConfirmDelete() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id);
      this.toastr.success('CV supprimé avec succès');
      this.showDeleteModal = false;
      this.router.navigate(['/cv']);
    }
  }

  onCancelDelete() {
    this.showDeleteModal = false;
  }

  goBack() {
    this.router.navigate(['/cv']);
  }
}
