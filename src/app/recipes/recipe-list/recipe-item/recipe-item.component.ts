import { RecipesService } from './../../recipes.service';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  //@Output() recipeSelected = new EventEmitter<Recipe>();
  @Input() index: number;
  
  ngOnInit() {
  }

}



  // onRecipeSelected(recipe: Recipe){
  //         this.recipeService.recipeSelected.emit(this.recipe);
  //     }

