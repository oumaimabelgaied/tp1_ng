import { Routes } from '@angular/router';
import { ColorBoxComponent } from './color-box/color-box.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { TtcComponent } from './ttc/ttc.component';
import { CvComponent } from './cv/cv.component';

export const routes: Routes = [
  { path: '', redirectTo: 'color-box', pathMatch: 'full' }, // default page
  { path: 'color-box', component: ColorBoxComponent },
  { path: 'business-card', component: BusinessCardComponent },
  { path: 'ttc', component: TtcComponent },
  { path: 'cv', component: CvComponent }
];