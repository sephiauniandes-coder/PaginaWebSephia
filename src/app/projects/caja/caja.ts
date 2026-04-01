import { Component } from '@angular/core';
import { LightboxService } from '../../lightbox.service';

@Component({
  selector: 'app-caja',
  standalone: false,
  templateUrl: './caja.html',
  styleUrl: './caja.css',
})
export class Caja {
  galeriaImages = [
    'assets/images/papa.jpg.jpeg',
    'assets/images/papa2.jpg.jpeg',
    'assets/images/papa3.jpg.jpeg',
    'assets/images/papa4.png',
  ];

  constructor(public lightbox: LightboxService) {}

  openGaleria(index: number) {
    this.lightbox.open(this.galeriaImages, index);
  }
}
