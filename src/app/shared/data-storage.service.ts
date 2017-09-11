import { RecipesService } from './../recipes/recipes.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable} from 'rxjs';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipesService) { }

    storeRecipes() {
        const header = new Headers({
            'ContentType': 'application/json'
        })        
        return this.http.put('https://ng-recipe-book-49068.firebaseio.com/recipes.json',
            this.recipeService.getRecipes(), { headers: header });
    }

}