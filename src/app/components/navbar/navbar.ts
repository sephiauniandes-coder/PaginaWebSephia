import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;
  projectsOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (!this.menuOpen) {
      this.projectsOpen = false;
    }
  }

  closeMenu() {
    this.menuOpen = false;
    this.projectsOpen = false;
  }

  toggleProjects(event: Event) {
    if (window.matchMedia('(max-width: 768px)').matches) {
      event.preventDefault();
      this.projectsOpen = !this.projectsOpen;
    }
  }
}
