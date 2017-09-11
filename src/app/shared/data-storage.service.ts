import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipesService } from './../recipes/recipes.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipesService, private authService: AuthService) { }

    storeRecipes() {
        let token = this.authService.getToken();

        const header = new Headers({
            'ContentType': 'application/json'
        })
        return this.http.put('https://ng-recipe-book-49068.firebaseio.com/recipes.json?auth=' + token,
            this.recipeService.getRecipes(), { headers: header });
    }


    getRecipes() {
        let token = this.authService.getToken();

        return this.http.get('https://ng-recipe-book-49068.firebaseio.com/recipes.json?auth=' + token) /// add query auth parameter
            .map((response: Response) => {
                const recipes: Recipe[]  = response.json();
                for (let recipe of recipes){
                    if(!recipe['ingredients']){
                        console.log(recipe);
                        recipe['ingredients'] = [] // add ingredients array to every object if missing 
                    }
                }
                return recipes;
            }
        )
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            })
    }

}