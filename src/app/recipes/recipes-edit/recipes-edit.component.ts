import { Recipe } from './../recipe.model';
import { RecipesService } from './../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipe: Recipe;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
    this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      //this.recipe = this.recipeService.getRecipe(this.id);

      console.log(this.editMode)
    }
    )
  }

  onSubmit(){
      console.log(this.recipeForm)
  }


  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);

      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description

      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
            recipeIngredients.push(
              new FormGroup({
                'name': new FormControl(ingredient.name),
                'amount': new FormControl(ingredient.amount)
              })
            )
        }
      }
    }
      this.recipeForm = new FormGroup({
              'name': new FormControl(recipeName),
              'imagePath': new FormControl(recipeImagePath),
              'description': new FormControl(recipeDescription),
              'ingredients': recipeIngredients
      });
  }

}
