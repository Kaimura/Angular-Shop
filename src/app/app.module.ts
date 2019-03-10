import { BrowserModule } from '@angular/platform-browser'; //directives and data binding
import { NgModule } from '@angular/core'; //decorator that provides meta data for module

import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  imports: [ //modules contain all the child components that only concern them!
    BrowserModule, CoreModule, CustomersModule, SharedModule, AppRoutingModule, OrdersModule
  ],
  declarations: [ //import all components
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent] //tells to load startup AppComponent first! (in case there are more components)
})
export class AppModule { }
