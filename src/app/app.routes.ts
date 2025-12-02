import { Routes } from '@angular/router';
import { ColorBoxComponent } from './color-box/color-box.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { TtcComponent } from './ttc/ttc.component';
import { CvComponent } from './cv/cv.component';
import { CvDetailComponent } from './cv/cv-detail/cv-detail.component';
import { LoginComponent } from './login/login.component';
import { CarouselPageComponent } from './carousel-page/carousel-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // default page
  { path: 'login', component: LoginComponent },
  { path: 'color-box', component: ColorBoxComponent },
  { path: 'business-card', component: BusinessCardComponent },
  { path: 'ttc', component: TtcComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: CvDetailComponent },
  { path: 'carousel', component: CarouselPageComponent },
];
