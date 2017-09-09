import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Params, Data} from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //@Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipesService,
     private route: ActivatedRoute, 
      private router: Router) { }

  ngOnInit() {
    const id = +this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      })
  }

  onAddToShoppingList(recipe: Recipe){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
     // this.recipeService.addIngredientsToShoppingList(recipe.ingredients);
  }

  // onEditRecipe(){
  //   this.router.navigate(['edit'], {relativeTo: this.route});
  //this.router.navigate('../', this.id, 'edit'], {relativeTo:this.route})
  // } if we want to use click-listener
}
