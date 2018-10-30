import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipies} from '../Recipies.model';
import {recipieService} from '../Recipies.service'
@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
@Output() recipiewasClicked = new EventEmitter<Recipies>();
recipies: Recipies[];



  constructor(private recService: recipieService ) { }

  ngOnInit() {
    this.recipies = this.recService.getRecipie();
    }
  OnRecipieCLicked(recipie:Recipies){
  this.recipiewasClicked.emit(recipie)
  }
}
