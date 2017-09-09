import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import{ Routes, RouterModule }from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'}, // always redirects prefix matching strategy 
    { path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        { path: 'new', component: RecipesEditComponent }, /// must be before :id
        {path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipesEditComponent },
    ]},
    { path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
}) // transform into Angular module
export class AppRoutingModule{


}