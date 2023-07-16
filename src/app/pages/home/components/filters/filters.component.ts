import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit {
  // When the user clicks a category in the FiltersComponent, the FiltersComponent emits an event with the new category. 
  // The event is called showCategory and it takes a string as its parameter (EventEmitter<string>()). 
  // The string parameter is the new category that was selected.
  @Output() showCategory = new EventEmitter<string>();

  // Create categories to filter the products in the website
  categories = ['shoes', 'sports'];
  
  constructor() {}

  ngOnInit(): void {
  }

  // Whatever category button is clicked in the mapped categories in the frontend, onShowCategory will emit an event with that new category.
  // The event is called showCategory and it takes a string as its parameter. The string parameter is the new category that was selected.
  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
