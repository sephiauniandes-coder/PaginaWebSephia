import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  images = [
    'assets/images/Agrocolia.png',
    'assets/images/Fertirriego.jpg',
    'assets/images/deteccionplagas.png',
    'assets/images/SephiaLargo.png'
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  ngOnInit() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}