import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameinput')nameInputRef : ElementRef;
    @ViewChild('amountinput')amountInputRef : ElementRef;
    @Output( )ingredientAdded= new EventEmitter<ingredient>();
    
  constructor() { }

  ngOnInit() {
  }
  onAdd(){
this.ingredientAdded.emit();
  }

}
