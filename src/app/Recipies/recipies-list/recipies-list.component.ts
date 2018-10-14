import { Component, OnInit } from '@angular/core';
import {Recipies} from '../Recipies.model';
@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {

recipies: Recipies[] = [

  new Recipies('A Test Recipie', "This is a description","https://www.google.com/search?q=recipe+images&rlz=1C1GCEA_enUS794US796&tbm=isch&source=iu&ictx=1&fir=O1EmZ2ihYKQUMM%253A%252Cf37DyeVQb8s3LM%252C_&usg=AI4_-kRceoZkn1yhPoqt4Z57aRtm6xXP8w&sa=X&ved=2ahUKEwiZ95P7ovvdAhWE44MKHfWEB4kQ9QEwDHoECAIQHA#imgrc=O1EmZ2ihYKQUMM:"),
  

];



  constructor() { }

  ngOnInit() {
  }

}
