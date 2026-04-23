import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { LightboxService } from './lightbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    public lightbox: LightboxService
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(fragment);
          }, 100);
        }
      }
    });
  }

  onNext(event: Event) {
    event.stopPropagation();
    this.lightbox.next();
  }

  onPrev(event: Event) {
    event.stopPropagation();
    this.lightbox.prev();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (!this.lightbox.isOpen) return;
    if (event.key === 'Escape') this.lightbox.close();
    if (event.key === 'ArrowRight') this.lightbox.next();
    if (event.key === 'ArrowLeft') this.lightbox.prev();
  }
}
