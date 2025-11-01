import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';

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
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  isDarkTheme = false;
  isDesktop = window.innerWidth > 768;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isDesktop = window.innerWidth > 768;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('darkTheme', JSON.stringify(this.isDarkTheme));
    
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  closeSidenav() {
    this.sidenav.close();
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