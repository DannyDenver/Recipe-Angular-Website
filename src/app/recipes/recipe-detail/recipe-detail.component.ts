import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) { }


  ngOnInit() {
  }

  onAddToShoppingList(recipe: Recipe){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
     // this.recipeService.addIngredientsToShoppingList(recipe.ingredients);
  }

}
