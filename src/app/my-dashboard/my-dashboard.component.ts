import { QuickLunchService } from './../services/quick-lunch.service';
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
          { title: 'Sur le pouce', cols: 1, rows: 1 },
          { title: 'Dessert', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'A la carte', cols: 2, rows: 1, id: 'alc'},
        { title: 'Sur le pouce', cols: 2, rows: 1, id: 'slp' },
        { title: 'Dessert', cols: 2, rows: 1, id : 'des' }
      ];
    })
  );

  alacarte: Food[];
  menu: Food[];
  surlepouce: Food[];
  dessert: Food[];
  // tslint:disable-next-line: typedef

  constructor(private breakpointObserver: BreakpointObserver, private qls: QuickLunchService) {}
  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.alacarte = this.qls.getAlacarte();
    this.surlepouce = this.qls.getsurlepouce();
    this.dessert = this.qls.getDessert();
  }
}
