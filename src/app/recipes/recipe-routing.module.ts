import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';


const recipesRoutes: Routes = [
 { path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        { path: 'new', component: RecipesEditComponent, canActivate: [AuthGuard] }, /// must be before :id
        {path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipesEditComponent, canActivate: [AuthGuard] },
    ]},
    
] 

@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)], // forChild!!!  app.module.ts - can only have .forRoot()
    exports: [RouterModule]

}) 
export class RecipesRoutingModule {}