import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'    
})

export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService, private router: Router){}
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
        onLogout(){
            this.authService.logout();
            this.router.navigate(['/signin'])
        }
}