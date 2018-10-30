import {Recipies} from './Recipies.model'
import { EventEmitter } from '@angular/core';

export class recipieService{
    recipieSelected = new EventEmitter<Recipies>();
    private recipies: Recipies[] = [

        new Recipies('A Test Recipie', "This is a description","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4lAwEbHCr5c-vCz-U15iM2Vns1840L1SdJ1BlXbMrGjAikKAng"),
        new Recipies('Second Recipie', "This is a description","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4lAwEbHCr5c-vCz-U15iM2Vns1840L1SdJ1BlXbMrGjAikKAng"),
      ];
      
      getRecipie(){
          return this.recipies.slice();
      }
}
