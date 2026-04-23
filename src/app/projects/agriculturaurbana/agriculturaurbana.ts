import { Component } from '@angular/core';
import { LightboxService } from '../../lightbox.service';

@Component({
  selector: 'app-agriculturaurbana',
  standalone: false,
  templateUrl: './agriculturaurbana.html',
  styleUrl: './agriculturaurbana.css',
})
export class Agriculturaurbana {
  galeriaImages = [
    'assets/images/urbana.png',
    'assets/images/urbana2.png',
    'assets/images/urbana3.png',
    'assets/images/urbana4.png',
    'assets/images/urbana5.jpg.jpeg',
    'assets/images/urbana6.png',
    'assets/images/urbana7.jpg.jpeg',
  ];

  constructor(public lightbox: LightboxService) {}

  openGaleria(index: number) {
    this.lightbox.open(this.galeriaImages, index);
  }
}
