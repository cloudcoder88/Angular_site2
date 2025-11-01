import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme = false;
  isDesktop = window.innerWidth > 768;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isDesktop = window.innerWidth > 768;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('darkTheme', JSON.stringify(this.isDarkTheme));
    
    // Apply theme to body
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  sidenavOpen = false;

toggleSidenav() {
  this.sidenavOpen = !this.sidenavOpen;
}

closeSidenav() {
  this.sidenavOpen = false;
}

  constructor() {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme) {
      this.isDarkTheme = JSON.parse(savedTheme);
      if (this.isDarkTheme) {
        document.body.classList.add('dark-theme');
      }
    }
  }
}