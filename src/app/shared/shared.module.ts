import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
@NgModule({
    declarations: [ CapitalizePipe ],
    exports: [ CapitalizePipe ] //exports it to make it usable for any other modules (like app.module) than just shared
})
export class SharedModule { }