import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Api } from '../services/api.service'
// import { EventEmitter } from 'events';

interface RecipeInfo {
  label: string;
  url: string;
  image: string;
  ingredients: [];
  totalTime: number;
  calories: number;
  healthLabels: string;
  bookmarked: boolean;

}

interface Recipe {
  count: number;
  recipe: RecipeInfo[];
  bookmarked: boolean;
}

interface ApiData {
  results: Recipe;
  hits: Recipe[];
}


@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [Api]
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[]; 
  searchInput: String;
  bookmarked: boolean;
  health: string = 'alcohol-free';
  caloriesRange: string = '1+';
  // clicked: boolean;
  favorites: Recipe[];

 
  // @Input() favorites: Recipe[];
  // @Output() eventClicked = new EventEmitter<Event>();
  // @Output() eventClicked = new EventEmitter<boolean>();
 

  constructor(private api: Api) { }
  

  ngOnInit() {
    
  }

  filterRecipes = () => {
    this.api.getRecipe(this.searchInput, this.health, encodeURIComponent(this.caloriesRange) ).subscribe((data: ApiData) => {
      this.recipes = data.hits;
    });

    console.log(this.health);
  }

  // onClick(event:Event): void {
  //   this.eventClicked.emit(event);
  // }

  // addFavorite = () => {
  //   this.eventClicked.emit(true);
  // }

 
  //  addFavorite = (i) => {
  //   this.recipes[i].bookmarked = true;
  //    this.favorites.push(this.recipes[i]);
  //   };

    // console.log(this.favorites);

  
  // };

  // favorites: Recipe[] = [];
  //  addFavorite = (i) => {
  //   this.recipes[i].bookmarked = true;
  //    this.favorites.push(this.recipes[i]);
  //   });
      
  // console.log(this.favorites);

  // };


  //  favorites: Recipe[] = [];
  //  addFavorite = (i) => {
  //    this.clicked.emit( this.recipes[i].bookmarked = true);
  //   this.favorites.push(this.recipes[i]);
  //   };
  //   console.log(this.favorites[i]);


}