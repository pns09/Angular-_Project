import {Component, Input, Output } from '@angular/core';
import {Recipies} from '../../Recipies.model'
import { EventEmitter } from '@angular/core';
import { recipieService } from '../../Recipies.service';
@Component({
selector:'app-recipie-item',
templateUrl:'./recipie-item.component.html',
styleUrls:['./recipie-item.component.css']

})
 


export class RecipieItemComponent{
  @Input()  recipie: Recipies;
  constructor(private recService:recipieService){

  }

  ngOnInit() {
    
    
  }
  onSelected(){
    this.recService.recipieSelected.emit(this.recipie)
  }
  
  }
