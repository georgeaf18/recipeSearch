import { Component, OnInit } from '@angular/core';
import {Api} from '../services/api.service'

  interface RecipeInfo {
    label: string;
    url: string;
    image: string;
    ingredients: [];
    totalTime: number;
    calories: number;
    healthLabels: string;

  }

  interface Recipe {
    count:number;
    recipe: RecipeInfo [];

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
  name = [];
  url: string;
  ingredients;
  image;



  ngOnInit

  constructor (private api: Api) {}

  getAllRecipes = () => {
    this.api.getRecipe().subscribe((data: ApiData) => {
      
      this.recipes = data.hits;


      for ( let recipe of this.recipes){
      this.name += recipe.recipe.label;
      }


      console.log(this.recipes);
    });
  }
  

}
