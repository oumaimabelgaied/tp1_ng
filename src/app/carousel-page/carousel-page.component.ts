import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';

@Component({
  selector: 'app-carousel-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ImageCarouselComponent],
  templateUrl: './carousel-page.component.html',
  styleUrls: ['./carousel-page.component.css'],
})
export class CarouselPageComponent {
  images: string[] = [
    'https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:16x9/messi-1805.jpg',
    'https://imageio.forbes.com/specials-images/imageserve/6491a41e82867c2b3f8901ca/Neymar-could-possibly-return-to-FC-Barcelona-this-summer-/960x0.jpg?format=jpg&width=960',
    'https://e0.365dm.com/16/03/1600x900/luis-suarez-barcelona-arsenal_3432451.jpg?20160316212314',
  ];

  intervalTime = signal<number>(2000);
  imageWidth = signal<string>('600px');
  imageHeight = signal<string>('400px');

  updateInterval(event: Event) {
    const target = event.target as HTMLInputElement;
    this.intervalTime.set(+target.value);
  }

  updateWidth(event: Event) {
    const target = event.target as HTMLInputElement;
    this.imageWidth.set(target.value);
  }

  updateHeight(event: Event) {
    const target = event.target as HTMLInputElement;
    this.imageHeight.set(target.value);
  }
}
