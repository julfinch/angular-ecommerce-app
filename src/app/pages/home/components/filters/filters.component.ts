import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();

  // Create categories to filter the products in the website
  categories= ['shoes', 'shirts'];
  
  constructor() {}

  ngOnInit(): void {
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
