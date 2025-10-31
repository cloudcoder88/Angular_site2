import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ngOnInit() {
    // initialize the typed.js effect
    // Wait a bit for the DOM to be ready
    setTimeout(() => {
      const options = {
        strings: [
          'Full Stack Developer',
          'Angular Specialist', 
          'UI/UX Enthusiast',
          'Problem Solver'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      };

      new Typed('#typed-element', options);
    }, 100);
  }
}