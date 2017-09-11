import { Response } from '@angular/http';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipesService } from './../recipes/recipes.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'    
})

export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService){}
    // @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }

    onSaveData(){
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            ); 
    }
        onFetchData(){
            this.dataStorageService.getRecipes()
        }
}