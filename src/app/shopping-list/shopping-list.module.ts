import { ShoppingListRouting } from './shopping-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';



@NgModule({
    declarations: [
        ShoppingEditComponent,
        ShoppingListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        ShoppingListRouting,
        FormsModule
        
    ]
})
export class ShoppingListModule{

}