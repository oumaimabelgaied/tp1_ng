import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorBoxComponent } from './color-box/color-box.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { TtcComponent } from './ttc/ttc.component';
import { CvComponent } from './cv/cv.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,
     ColorBoxComponent ,
      BusinessCardComponent, 
      TtcComponent,
      CvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp1_ng';
}
