import { Component } from '@angular/core';
import { LightboxService } from '../../lightbox.service';

@Component({
  selector: 'app-historia',
  standalone: false,
  templateUrl: './historia.html',
  styleUrl: './historia.css',
})
export class Historia {
  galeriaImages = [
    'assets/images/Galeriadefotos.jpeg',
    'assets/images/galeriadefotos2.jpeg',
    'assets/images/galeriadefotos3.jpeg',
    'assets/images/galeriadefotos4.jpeg',
    'assets/images/galeriadefotos5.jpeg',
    'assets/images/galeriadefotos6.jpeg',
    'assets/images/galeriadefotos7.jpeg',
  ];

  constructor(public lightbox: LightboxService) {}

  openGaleria(index: number) {
    this.lightbox.open(this.galeriaImages, index);
  }
}
