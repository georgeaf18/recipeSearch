import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service'

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

interface Favorite {
  label: string;
  url: string;
  image: string;
  ingredients: [];
  totalTime: number;
  calories: number;
  healthLabels: string;
  bookmarked: boolean;
}

// interface Favorite {
//   bookmarked: boolean;
// }

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
  favorites: Recipe[];
  numberIngr: string = '2+'

  health: string = 'alcohol-free';
  caloriesRange: string = '1+';
  // health: string = 'alcohol-free';


  constructor(private api: Api) { }
  

  // favorites: Favorite [] = [
  //   { label: '',
  //     url: '',
  //     image:'',
  //     ingredients: [],
  //     totalTime: 0,
  //     calories: 0,
  //     healthLabels: '',
  //     bookmarked: true}
  // ]

  // favorites: Favorite[] = []

  ngOnInit() {
    
  }

  filterRecipes = () => {
    this.api.getRecipe(this.searchInput, this.health, encodeURIComponent(this.numberIngr) ).subscribe((data: ApiData) => {
      this.recipes = data.hits;
    });

    console.log(this.health);
  }

  addFavorite = (recipe) => {
    this.recipes[recipe].bookmarked = true;
    const favorites = [];
    this.favorites.push(recipe);
  };

  //  addFavorite = (recipe) => {
  //   this.recipes[recipe].bookmarked = true;
  //       const newFavorite = {
  //       label: '',
  //       url: '',
  //       image:'',
  //       ingredients: [],
  //       totalTime: 0,
  //       calories: 0,
  //       healthLabels: '',
  //       bookmarked: false,
  //   };
  //   this.favorites.push(newFavorite);
  // };

  // addFavorite = (index) => {
  //   this.recipe[index].bookmarked = true;
  // };
  // addFavorite = (recipe) => {
  //   this.recipe[recipe].bookmarked = true;
  // };

  // addFavorite = (index) => {
  //   const newFavorite = {
  //   label: '',
  //   url: '',
  //   image:'',
  //   ingredients: [],
  //   totalTime: 0,
  //   calories: 0,
  //   healthLabels: '',
  //   bookmarked: false,
  //   };
  //   this.favorites.push(newFavorite);
  // };

  // addFavorite = (index) => {
  //   const newFavorite = {
  //   label: '',
  //   url: '',
  //   image:'',
  //   ingredients: [],
  //   totalTime: 0,
  //   calories: 0,
  //   healthLabels: '',
  //   bookmarked: false,
  //   };
  //   this.favorites.push(newFavorite);
  // };

}