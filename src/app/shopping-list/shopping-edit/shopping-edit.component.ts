import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

   //@Output() ingredientAdded = new EventEmitter<Ingredient>();
   //@Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();

   constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit() {
  }

    onAddItem(form: NgForm){
      // const ingName = this.nameInputRef.nativeElement.value;
      // const ingAmount = this.amountInputRef.nativeElement.value;

      const value = form.value;
      const newIngredient = new Ingredient(value.name, value.amount); //come from names on template
      this.shoppingListService.addIngredient(newIngredient);
     // this.ingredientAdded.emit(newIngredient); 
    }

    
    

}
