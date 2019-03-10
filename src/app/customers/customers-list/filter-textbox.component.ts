import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  template: `
        Filter: <input type="text" [(ngModel)]="filter" /> 
    `
    //alternative: [value]="filter" (input)="filter=$event.target.value"
})
export class FilterTextboxComponent implements OnInit {
  private _filter: string;

  constructor() { }

  ngOnInit() {

  }

  @Input() get filter() {
      return this._filter;
  }
  
  set filter(val: string) {
      this._filter = val;
      this.changed.emit(this.filter); //Raise changed event - gets passed to $event in customers-list.component (iow: $event is not an event but a string containing value)
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  

}
