import { Food } from './../models/food.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickLunchService {



  alacarte: Food[] = [
  {id: 1 , title: 'hamburger', description: 'le meilleur burger du moment', price: 6.40},
  {id: 2 , title: 'banana split', description: 'le dessert de l homme des neiges', price: 99.99 },
  {id: 3 , title: 'omelette du moment', description: 'oeuf sans oeuf vegetarien', price: 90.98}
];


surlepouce: Food[] = [
  {id: 1 , title: 'grand travers', description: 'le meilleur menu du moment', price: 76.40},
  {id: 2 , title: 'petit travers', description: 'pour les petites faim', price: 39.99 },
  {id: 3 , title: 'avoir faim', description: 'ca tombe bien', price: 190.98}
];

dessert: Food[] = [
  {id: 1 , title: 'omelette norvegienne', description: 'le meilleur dessert du moment', price: 6.40},
  {id: 2 , title: 'fondant au chocolat', description: 'miam-miam', price: 9.99 },
  {id: 3 , title: 'avoir faim sucré', description: 'ca tombe bien', price: 10.98}
];

  constructor() { }


  getAlacarte(): Food[]{
    return this.alacarte;
  }


  getDessert(): Food[] {
    return this.dessert;
  }

  getsurlepouce(): Food[]{
    return this.surlepouce;
  }

}
