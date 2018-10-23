import {Component, Output} from '@angular/core';

import {EventEmitter} from '@angular/core'

@Component(
    {
selector:'app-Header',
templateUrl:'./Header.component.html',
styleUrls:['./Header.component.css']

    }
)




export class HeaderComponent{
@Output() featureSelected = new EventEmitter<string>();

onSelect(feature:string){
    this.featureSelected.emit(feature);
}
}