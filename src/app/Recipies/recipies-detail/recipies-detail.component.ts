import { Component, OnInit, Input } from '@angular/core';
import { Recipies } from '../Recipies.model';

@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.component.html',
  styleUrls: ['./recipies-detail.component.css']
})
export class RecipiesDetailComponent implements OnInit {
  @Input()recip:Recipies;
  constructor() { }

  ngOnInit() {
  }

}
