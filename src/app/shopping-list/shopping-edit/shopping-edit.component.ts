import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm : NgForm; 
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

   //@Output() ingredientAdded = new EventEmitter<Ingredient>();
   //@Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();

   constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
    .subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(this.editedItemIndex);

      this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount : this.editedItem.amount
      })

    });
  }

    onSubmit(form: NgForm){
      // const ingName = this.nameInputRef.nativeElement.value;
      // const ingAmount = this.amountInputRef.nativeElement.value;

      const value = form.value;
      const newIngredient = new Ingredient(value.name, value.amount); //come from names on template

      if(this.editMode){
        this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
      }else{
      this.shoppingListService.addIngredient(newIngredient);
      }
    this.shoppingListForm.reset();
    this.editMode = false;
     // this.ingredientAdded.emit(newIngredient); 
    }

    onClear(){
      this.shoppingListForm.reset();
      this.editMode = false;
    }
    onDelete(){
      if(this.editMode == true){
        this.shoppingListService.removeIngredient(this.editedItemIndex);
      }
            this.editMode = false;
                this.shoppingListForm.reset();


    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
    

}
