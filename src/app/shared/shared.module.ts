import { CommonModule } from '@angular/common';
import { DropDownDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [DropDownDirective],
    exports: [
        CommonModule,
        DropDownDirective
    ]
})
export class SharedModule{}

// never provide services on shared module
// especially if you plan to use them on lazy load modules