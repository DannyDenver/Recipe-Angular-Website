import { Router, ActivatedRoute } from '@angular/router';
import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

    constructor(private recipeService: RecipesService, private router: Router, private route: ActivatedRoute) { }

// onRecipeSelected(recipe: Recipe){
//   this.recipeWasSelected.emit(recipe);
// }

  ngOnInit() {  
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){ 
    this.router.navigate(['new'], { relativeTo: this.route}) //relative route, already in recipes

  }
}
