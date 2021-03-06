import { HomeComponent } from './core/home/home.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import{ Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent}, // always redirects prefix matching strategy    
    //{ path: '', redirectTo: '/recipes', pathMatch: 'full'}
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', } /// lazy loading, specify class name with hash 
            //canLoad: [AuthGuard]
 ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules })], // preloading lazy loaded routes
    exports: [RouterModule]
}) // transform into Angular module
export class AppRoutingModule{


}