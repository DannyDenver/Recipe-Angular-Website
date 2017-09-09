import { Recipe } from './../recipe.model';
import { RecipesService } from './../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>
    { this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.recipe = this.recipeService.getRecipe(this.id);

    console.log(this.editMode) }    
  )

  }

}
