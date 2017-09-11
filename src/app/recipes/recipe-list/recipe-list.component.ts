import { AuthService } from './../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  subscription: Subscription

    constructor(private recipeService: RecipesService, 
                private router: Router, 
                private route: ActivatedRoute,
                private authService: AuthService) { }

// onRecipeSelected(recipe: Recipe){
//   this.recipeWasSelected.emit(recipe);
// }

  ngOnInit() {  
    this.subscription =this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){    

    if(this.authService.isAuthenticated()){
        this.router.navigate(['new'], { relativeTo: this.route}) //relative route, already in recipes
    }else{
      this.router.navigate(['/signup']);
    }
  }
  ngOnDestroy(){
    this.subscription.unsubscribe;
  }
}
