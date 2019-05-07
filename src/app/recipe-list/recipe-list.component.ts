import { Component, OnInit } from '@angular/core';
import {Api} from '../services/api.service'

<<<<<<< Updated upstream
=======
  interface RecipeInfo {
    label: string;
    url: string;
    image: string;
    ingredients: [];
    totalTime: number;
    calories: number;
    healthLabels: string;
    favorite: boolean;

  }

  interface Recipe {
    count:number;
    recipe: RecipeInfo [];

  }

  interface ApiData {
    results: Recipe;
    hits: Recipe[];
  }

>>>>>>> Stashed changes
@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [Api]
})
export class RecipeListComponent implements OnInit {

<<<<<<< Updated upstream
=======
  recipes: Recipe[];
  name = [];
  url: string;
  ingredients;
  image;
  favorite: boolean = false;

>>>>>>> Stashed changes

  ngOnInit

  constructor (private api: Api) {}

  getAllRecipes = () => {
<<<<<<< Updated upstream
    this.api.getRecipe().subscribe(data => console.log(data))
=======
    this.api.getRecipe().subscribe((data: ApiData) => {
      
      this.recipes = data.hits;


      for ( let recipe of this.recipes){
      this.name += recipe.recipe.label;
   
      }


      console.log(this.recipes);
    });
>>>>>>> Stashed changes
  }
  
  addFavorite = (item) => {
    item.favorite = true;
    
  }

}
