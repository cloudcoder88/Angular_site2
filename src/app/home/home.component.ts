import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { RouterLink,RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[RouterModule,
   RouterLink],
  standalone:true
  
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    // Typed.js initialization
    const typed = new Typed('.typed-text', {
      strings: [
        'Full Stack Developer',
        'AI Enthusiast', 
        'Machine Learning Engineer',
        'Typescript Wizard',
        'Problem Solver'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });
  }
}