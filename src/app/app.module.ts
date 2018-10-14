import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './Header/Header.component';
import { AppComponent } from './app.component';
import { RecipiesComponent } from './Recipies/Recipies.component';
import { RecipiesListComponent } from './Recipies/recipies-list/recipies-list.component';
import { RecipiesDetailComponent } from './Recipies/recipies-detail/recipies-detail.component';

import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { RecipieItemComponent} from './Recipies/recipies-list/recipie-item/recipie-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipiesListComponent,
    RecipiesDetailComponent,
       ShoppingComponent,
    ShoppingEditComponent,
    RecipieItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
