import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    // Typed.js initialization
    const typed = new Typed('.typed-text', {
      strings: [
        'Full Stack Developer',
        'AI Enthusiast', 
        'Machine Learning Engineer',
        'Problem Solver'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    });
  }
}