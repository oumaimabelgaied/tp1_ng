import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval, Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-carousel-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carousel-page.component.html',
  styleUrls: ['./carousel-page.component.css'],
})
export class CarouselPageComponent {
  // liste d'images (propriété simple)
  images = [
    'https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:16x9/messi-1805.jpg',
    'https://imageio.forbes.com/specials-images/imageserve/6491a41e82867c2b3f8901ca/Neymar-could-possibly-return-to-FC-Barcelona-this-summer-/960x0.jpg',
    'https://e0.365dm.com/16/03/1600x900/luis-suarez-barcelona-arsenal_3432451.jpg?20160316212314',
  ];

  // paramètres modifiables
  intervalTime = 2000; // ms
  imageWidth = '600px';
  imageHeight = '400px';

  // Observable de l'image courante (direct, sans index$)
  image$!: Observable<string>;

  constructor() {
    this.setupStreams();
  }

  private setupStreams() {
    const len = this.images.length || 1;
    this.image$ = interval(this.intervalTime).pipe(
      startWith(0),
      map(i => this.images[i % len])
    );
  }

  // si l'utilisateur change l'interval, on recrée simplement le stream image$
  updateInterval(event: Event) {
    const v = Number((event.target as HTMLInputElement).value);
    if (!isNaN(v) && v > 0) {
      this.intervalTime = v;
      this.setupStreams();
    }
  }
}