import { Component } from '@angular/core';
import { LightboxService } from '../../lightbox.service';

@Component({
  selector: 'app-burrito',
  standalone: false,
  templateUrl: './burrito.html',
  styleUrl: './burrito.css',
})
export class Burrito {
  galeriaImages = [
    'assets/images/Agrocolia.png',
    'assets/images/Agrocolia2.jpg.jpeg',
  ];

  constructor(public lightbox: LightboxService) {}

  openGaleria(index: number) {
    this.lightbox.open(this.galeriaImages, index);
  }
}
