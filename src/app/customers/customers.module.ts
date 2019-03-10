import { CommonModule } from '@angular/common'; //directives - like *ngFor, *ngIf etc are in there
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core'; //decorator that provides meta data for module

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component'; 
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.component';


@NgModule({
    imports: [
        CommonModule, SharedModule, FormsModule, CustomersRoutingModule
    ],
    declarations: [ //import all child components of this module
        CustomersComponent, CustomersListComponent, FilterTextboxComponent
    ],
    providers: [],


    exports: [CustomersComponent] //temporary solution...
})
export class CustomersModule { }
