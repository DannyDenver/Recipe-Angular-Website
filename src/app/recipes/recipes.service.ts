import { DataStorageService } from './../shared/data-storage.service';
import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core'

@Injectable()

export class RecipesService{
    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService){}

    //recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = 
    [new Recipe("Salsa", "Super spicy! Ouch!", "https://cimg0.ibsrv.net/cimg/www.fitday.com/693x350_100-1/12/salsa_000047788138_Small-107012.jpg",
[
    new Ingredient("Tomato", 3),
    new Ingredient("Cilantro", 1)
] ),
new Recipe("Pizza Pie", "Probably not good for lactose intolerant people. ","https://www.meals.com/imagesrecipes/144032lrg.jpg",
 [
     new Ingredient("Dough", 1),
     new Ingredient("Pasta Sauce", 1)
 ] )];

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
 
    getRecipes(){
        return this.recipes.slice(); /// get exact copy 
    }; 
    getRecipe(index: number){
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}