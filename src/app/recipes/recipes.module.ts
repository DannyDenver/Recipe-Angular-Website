import { SharedModule } from './../shared/shared.module';
import { RecipesRoutingModule } from './recipe-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropDownDirective } from './../shared/dropdown.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';


@NgModule({
    declarations:[
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipesEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent        
    ],
    imports: [  //bring in other modules 
        CommonModule,
        ReactiveFormsModule,     
        RecipesRoutingModule,
        SharedModule
    ],
    providers: []



})
export class RecipesModule{


}