import { ShoppingListComponent } from './shopping-list.component';

import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';


const shoppingListRoutes: Routes = [
     { path: 'shopping-list', component: ShoppingListComponent},    
] 

@NgModule({
    imports: [RouterModule.forChild(shoppingListRoutes)], // forChild!!!  app.module.ts - can only have .forRoot()
    exports: [RouterModule]

}) 
export class ShoppingListRouting {}