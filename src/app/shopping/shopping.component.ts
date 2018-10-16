import { Component, OnInit } from '@angular/core';
import {ingredient}from '../shared/ingredient.model'
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
ingredients: ingredient[]=[
  new ingredient('apple',10),
  new ingredient('banana',5),

];
  constructor() { }

  ngOnInit() {
  }

}
