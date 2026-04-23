import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LightboxService {
  images: string[] = [];
  currentIndex = 0;
  isOpen = false;

  open(images: string[], index: number) {
    this.images = images;
    this.currentIndex = index;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
