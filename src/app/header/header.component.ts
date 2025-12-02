import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navLinks = [
    { label: 'Login', path: '/login' },
    { label: 'Carousel', path: '/carousel' },
    { label: 'Color Box', path: '/color-box' },
    { label: 'Business Card', path: '/business-card' },
    { label: 'TTC', path: '/ttc' },
    { label: 'CV', path: '/cv' },
  ];
}
