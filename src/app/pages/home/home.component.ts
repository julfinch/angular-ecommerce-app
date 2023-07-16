import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  // Create the variable "cols" that will hold the default columns which is 3
  cols = 3;
  category: string | undefined;

  constructor() {}

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }

  // The onShowCategory() method sets the category property to the new category. 
  // The category property is a property of the HomeComponent that stores the current category selected by the user.
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
