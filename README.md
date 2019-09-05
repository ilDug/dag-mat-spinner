# dag-mat-spinner

A full screen spinner based on Angular Material
This package is intended to be use in Angular projects as NgModule. See [demo](http://dagtech.it)

## Installation 

To get started, install the package with npm or Yarn:

    npm install @ildug/dag-mat-spinner

or 

    yarn install  @ildug/dag-mat-spinner


## Usage

Import the module in your angular app. In your module **app.module.ts**

``` typescript
    ...
    import { DagMatSpinnerModule } from 'dag-mat-spinner';

    @NgModule({
        declarations: [
            AppComponent,
        ],
        imports: [
            ...
            DagMatSpinnerModule,
            ...
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }
```

Then add directive "*dagSpinner*" to your template wherever you want. The spinner is triggered through a boolean property.
In **my.component.ts**

``` typescript
    @Component({
        selector: 'root',
        templateUrl: "my.component.html",
        styles: []
    })
    export class MyComponent {
        ...
        public loading : boolean;

        onLoadMethod(){
            this.loading = true;
            /** your logic */
        }
        ...
    }

``` 

In **my.component.html**

``` html
    <div [dagSpinner]="loading">
            <!-- template content -->
    </div>
```


## Theming

This package is dependent from [Angular Material](https://material.angular.io). It comes with all dependencies, *but you must to theming colors*.

Add  material themes style reference to your angular project **angular.json** file:

``` json
    ...
    "styles": [
      "node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
      "src/styles.scss"
    ],
    ...
``` 

or include one line in your **styles.css** file

``` css
    @import '@angular/material/prebuilt-themes/indigo-pink.css';
 ``` 

Alternatively, you can just reference the file directly. This would look something like:

``` html
    <link href="node_modules/@angular/material/prebuilt-themes/indigo-pink.css" rel="stylesheet">
``` 
