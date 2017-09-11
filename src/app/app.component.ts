import { ShoppingListService } from './shopping-list/shopping-list.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipesService } from './recipes/recipes.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipesService, DataStorageService]

})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature:string){
    this.loadedFeature = feature;  
  }

  ngOnInit(){
    firebase.initializeApp({
         apiKey: "AIzaSyBaioLTyrR8tYf5nQ16jwvDF3zVdN6nvIU",
         authDomain: "ng-recipe-book-49068.firebaseapp.com"
    })
  }
}
 //authentication strings 