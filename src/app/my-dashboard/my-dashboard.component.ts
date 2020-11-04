import { Food } from './../models/food.interface';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'A la carte', cols: 1, rows: 1 },
          { title: 'Menu', cols: 1, rows: 1 },
          { title: 'Sur le pouce', cols: 1, rows: 1 },
          { title: 'Dessert', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'A la carte', cols: 2, rows: 1 },
        { title: 'Menu', cols: 2, rows: 1 },
        { title: 'Sur le pouce', cols: 2, rows: 2 },
        { title: 'Dessert', cols: 2, rows: 1 }
      ];
    })
  );
  // tslint:disable-next-line: typedef
  ngOnInit() {}
  constructor(private breakpointObserver: BreakpointObserver) {}
}
