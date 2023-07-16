# AngularEcommerceApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## CREATING CATEGORY FILTER FUNCTIONALITY

### Folder Structure

    📁app
        └📁pages
            └📁home
                └📁components
                    └📁filters
                        └📄filters.component.html
                        └📄filters.component.ts
                    └📁products-header
                        └📄products-header.component.html
                        └📄products-header.component.ts
                    └📄home.component.html
                    └📄home.component.ts

### THE DETAILS OF EACH STEP PROCESS:
1. When the user clicks a category in the `FiltersComponent`, the `FiltersComponent` emits an event with the new category. The event is called `showCategory` and it takes a string as its parameter. The string parameter is the new category that was selected.
    - FILTERS.COMPONENT.HTML
    ```shell
        <mat-expansion-panel *ngIf="categories">
                <mat-list-option *ngFor="let category of categories" [value]="category">
                    <button (click)="onShowCategory(category)">{{category}}</button>
                </mat-list-option>
            </mat-selection-list>
        </mat-expansion-panel>
    ```
    - FILTERS.COMPONENT.TS
    ```shell
        export class FiltersComponent {
        @Output() showCategory = new EventEmitter<string>();

        categories = ['shoes', 'sports'];

        onShowCategory(category: string): void {
            this.showCategory.emit(category);
        }
        }
    ```
1. The `onShowCategory()` method in the `HomeComponent` is called when the `showCategory` event is emitted. The `onShowCategory()` method takes a parameter, `$event`, which contains the new category that was selected.
    - HOME.COMPONENT.HTML
    ```shell
        <mat-drawer-container>
            <mat-drawer>
                <app-filters (showCategory)="onShowCategory($event)"></app-filters>
            </mat-drawer>
        </mat-drawer-container>
    ```
1. The `onShowCategory()` method sets the category property to the new category. The category property is a property of the `HomeComponent` that stores the current category selected by the user.
    - HOME.COMPONENT.TS
    ```shell
        export class HomeComponent{
        category: string | undefined;

        onShowCategory(newCategory: string): void {
            this.category = newCategory;
        }
        }
    ```
1. The HTML template is updated to display the new category. The HTML template for the `HomeComponent` contains an interpolation directive that displays the current category. When the category property is updated, the interpolation directive is updated to display the new category.
### FILTERS.COMPONENT.HTML
    ```shell
    <!-- Expand the panel if categories exist and not undefined -->
    <mat-expansion-panel *ngIf="categories">
        <mat-expansion-panel-header>
            <mat-panel-title>CATEGORIES</mat-panel-title>
        </mat-expansion-panel-header>

        <!-- Multiple set to false means we can only select one at a time from the list -->
        <mat-selection-list [multiple]="false">

            <!-- We will loop throught the list of categories -->
            <mat-list-option *ngFor="let category of categories" [value]="category">
                <button (click)="onShowCategory(category)">{{category}}</button>
            </mat-list-option>
        </mat-selection-list>
    </mat-expansion-panel>
    ```

### FILTERS.COMPONENT.TS
Under `filter.component.ts`, we will create the logic. The `@Output() showCategory = new EventEmitter<string>();` method is the Angular method in sending data from child component to parent component(HOME COMPONENT). The `EventEmitter<string>` means it will send the chosen category which is in string.
    -   `showCategory`: An output property that emits a string when a category is selected.
    -   `categories`: An array of strings that represents the categories available to filter products.
    -   `onShowCategory()`: A method that is called when a category is selected. The method emits the selected category to the showCategory output property.
    -   `@Output() decorator`: This decorator specifies that the showCategory property is an output property. Output properties can be used to emit events.
    -   `new EventEmitter<string>()`: This constructor creates a new EventEmitter object. EventEmitter objects can be used to emit events.
    -   `onShowCategory() method`: This method is called when a category is selected. The method emits the selected category to the showCategory output property.
    -   `this.showCategory.emit(category)`: This line of code emits the category parameter to the showCategory output property.
    ```shell
    export class FiltersComponent{
    @Output() showCategory = new EventEmitter<string>();

    // Create categories to filter the products in the website
    categories = ['shoes', 'sports'];

    onShowCategory(category: string): void {
        this.showCategory.emit(category);
    }
    ```

### HOME.COMPONENTS.HTML
    ```shell
        <mat-drawer-container>
            <mat-drawer mode="side" opened class="p-6">
                <app-filters (showCategory)="onShowCategory($event)"></app-filters>
            </mat-drawer>
        </mat-drawer-container>
    ```

### HOME.COMPONENTS.TS
    ```shell
        export class HomeComponent{

        category: string | undefined;

        onShowCategory(newCategory: string): void {
            this.category = newCategory;
        }
        }
    ```