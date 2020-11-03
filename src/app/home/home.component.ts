import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  food = 'assets/images/dark-mood-food-2986532_1920.jpg';
  notreequipe = 'assets/images/kitchen-731351_1920.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
