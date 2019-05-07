// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);


//Rest list comp html:



// <h1>Nom Nom Recipes</h1>

// <div class="search">
//   <input [(ngModel)]="searchInput" (input)="filterRecipes()" class="searchInput" type="text" placeholder="Search for a recipe"/>
//   <br />

//   <select (input)="filterHeath($event)"class="subFilter">
//     <option value="">Health Type</option>
//     <option value="vegan">Vegan</option>
//     <option value="vegeterian">vegetarian</option>
//     <option value="alcohol-free">Alcohol Free</option>
//   </select>

//   <select (input)="filterTime($event)" class="subFilter">
//     <option value="">Time</option>
//     <option value="0-15">0-15 minutes</option>
//     <option value="15-30">15-30 minutes</option>
//     <option value="60%2B">1 hour</option>
//     <option value="120%2B">2 hours and above</option>
//   </select>
// </div>

// <div class="container">
//   <div class="recipe_div"  *ngFor='let recipe of recipes'>
  
//   <h1 class='recipe_heading'>{{recipe.recipe.label}}</h1>
//   <!-- <ul>
//     <li *ngFor = 'let ingredient of recipe.recipe.ingredientLines'>{{ingredient}}</li>

//   </ul> -->

//   <a href={{recipe.recipe.url}}><img class='recipe_img' src={{recipe.recipe.image}} alt=""></a>
  
//   <p>Health labels: {{ recipe.recipe.healthLabels }}</p>
//   <p>Time to Prepare: {{ recipe.recipe.totalTime }} minutes</p>
//   <p>Calories: {{ recipe.recipe.calories | number: '1.0-0'}}</p>
// </div>

// </div>



//recipe list comp ts

// import { Component, OnInit } from '@angular/core';
// import { Api } from '../services/api.service'

// interface RecipeInfo {
//   label: string;
//   url: string;
//   image: string;
//   ingredients: [];
//   totalTime: number;
//   calories: number;
//   healthLabels: string;

// }

// interface Recipe {
//   count: number;
//   recipe: RecipeInfo[];

// }

// interface ApiData {
//   results: Recipe;
//   hits: Recipe[];
// }

// @Component({
//   selector: 'recipe-list',
//   templateUrl: './recipe-list.component.html',
//   styleUrls: ['./recipe-list.component.css'],
//   providers: [Api]
// })

// export class RecipeListComponent implements OnInit {
//   recipes: Recipe[];
//   searchInput: String;

//   constructor(private api: Api) { }

//   ngOnInit() {
//     this.api.getRecipe({}).subscribe((data: ApiData) => {
//       this.recipes = data.hits.slice(0, 20);
//     }); 
//   }

//   filterRecipes = () => {
//     this.api.getRecipe({query: this.searchInput}).subscribe((data: ApiData) => {
//       this.recipes = data.hits;
//     });
//   }

//   filterHeath = (e) => {
//     this.api.getRecipe({health: e.target.value}).subscribe((data: ApiData) => {
//       this.recipes = data.hits;
//     });    
//   } 
  
//   filterTime = (e) => {
//     this.api.getRecipe({time: e.target.value}).subscribe((data: ApiData) => {
//       this.recipes = data.hits;
//     });    
//   }   
// }




//api service ts

// import {Injectable} from '@angular/core'
// import {HttpClient} from '@angular/common/http'

// @Injectable()

// export class Api {
//     appId: string = '00a41518';
//     appKey: string = '482baab8eed3d4133ec335372e8171b8';
//     recipeUrl: string;
//     fromNumber: number = 0;
//     toNumber: number = 20;
//     query: String = 'pork';


//     constructor( private http: HttpClient) {
//         this.recipeUrl = `https://api.edamam.com/search?q=${this.query}&app_id=${this.appId}&app_key=${this.appKey}&from=${this.fromNumber}&to=${this.toNumber}`;
//     }
    
//     getRecipe = (queries) => {
//         if (queries.query) {
//             this.query = queries.query;
//             this.recipeUrl = `https://api.edamam.com/search?q=${this.query}&app_id=${this.appId}&app_key=${this.appKey}&from=${this.fromNumber}&to=${this.toNumber}`;
//         }
//         if (queries.health) {
//             this.recipeUrl += `&health=${queries.health}`;
//         } 
//         if (queries.time) {
//             this.recipeUrl += `&time=${queries.time}`;
//         }                
//         return this.http.get(this.recipeUrl);
//     }
    
// }