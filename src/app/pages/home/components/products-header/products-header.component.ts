import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
})
export class ProductsHeaderComponent implements OnInit {
  // @Output is the Angular method in sending data from child component to parent component(HOME COMPONENT)
  // EventEmitter<number> means it will send a number - the number of columns we want to display in a row
  @Output() columnsCountChange = new EventEmitter<number>();

  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort= 'desc';
  itemsShowCount = 12;

  constructor() {}

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  // This emits the number of columns we received from the template
  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum)
  }
}
