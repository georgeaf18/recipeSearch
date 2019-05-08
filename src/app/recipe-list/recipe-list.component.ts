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

// interface Favorite {
//   label: string;
//   url: string;
//   image: string;
//   ingredients: [];
//   totalTime: number;
//   calories: number;
//   healthLabels: string;
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
<<<<<<< HEAD
  bookmarked: boolean;
  favorites: Recipe[];
  
=======
  health: string = 'alcohol-free';
  caloriesRange: string = '1+';
  // health: string = 'alcohol-free';
>>>>>>> 37e1d99de47c37667852134bb0be1635924d8ab8

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
    this.api.getRecipe(this.searchInput, this.health, encodeURIComponent(this.caloriesRange) ).subscribe((data: ApiData) => {
      this.recipes = data.hits;
    });

    console.log(this.health);
  }

  addFavorite = (recipe) => {
    this.recipes[recipe].bookmarked = true;
    const favorites = [];
    this.favorites.push(this.recipes);
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



}