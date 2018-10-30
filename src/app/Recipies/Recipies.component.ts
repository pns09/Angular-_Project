import {Component, Input} from '@angular/core';
import { Recipies } from './Recipies.model';
import { recipieService } from './Recipies.service';

@Component({
    selector:'app-Recipies',
    templateUrl:'./Recipies.component.html',
    providers: [recipieService]
 
})



export class RecipiesComponent{

}
   
    


