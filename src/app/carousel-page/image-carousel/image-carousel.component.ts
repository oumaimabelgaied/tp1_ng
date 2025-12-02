import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, interval, map, startWith, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent implements OnInit, OnDestroy, OnChanges {
  @Input() images: string[] = [];
  @Input() intervalTime: number = 1000;
  @Input() imageWidth: string | number = '200px';
  @Input() imageHeight: string | number = '200px';

  currentImage$!: Observable<string>;
  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const params = this.route.snapshot.queryParams;

    if (params['images']) {
      this.images = params['images'].split(',');
    }

    if (params['intervalTime']) {
      this.intervalTime = +params['intervalTime'];
    }

    if (params['imageWidth']) {
      this.imageWidth = params['imageWidth'];
    }

    if (params['imageHeight']) {
      this.imageHeight = params['imageHeight'];
    }

    if (this.images.length === 0) {
      this.images = [
        'https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:16x9/messi-1805.jpg',
        'https://imageio.forbes.com/specials-images/imageserve/6491a41e82867c2b3f8901ca/Neymar-could-possibly-return-to-FC-Barcelona-this-summer-/960x0.jpg?format=jpg&width=960',
        'https://e0.365dm.com/16/03/1600x900/luis-suarez-barcelona-arsenal_3432451.jpg?20160316212314',
      ];
    }

    this.createCarousel();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Si l'intervalle change, recréer le carousel
    if (changes['intervalTime'] && !changes['intervalTime'].firstChange) {
      this.destroy$.next();
      this.destroy$.complete();
      this.destroy$ = new Subject<void>();
      this.createCarousel();
    }
  }

  private createCarousel() {
    this.currentImage$ = interval(this.intervalTime).pipe(
      startWith(0),
      map((index) => this.images[index % this.images.length]),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get width(): string {
    return typeof this.imageWidth === 'number'
      ? `${this.imageWidth}px`
      : this.imageWidth;
  }

  get height(): string {
    return typeof this.imageHeight === 'number'
      ? `${this.imageHeight}px`
      : this.imageHeight;
  }
}
