import { Component, OnInit } from '@angular/core';
import {Recipies} from '../Recipies.model';
@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {

recipies: Recipies[] = [

  new Recipies('A Test Recipie', "This is a description","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4lAwEbHCr5c-vCz-U15iM2Vns1840L1SdJ1BlXbMrGjAikKAng"),
];



  constructor() { }

  ngOnInit() {
  }

}
