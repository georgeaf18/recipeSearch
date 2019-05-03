import { Component, OnInit } from '@angular/core';
import {Api} from '../services/api.service'

  interface Recipe {
    count:number;

  }

  interface ApiData {
    results: Recipe;
  }

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [Api]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  name: string;
  url: string;
  ingredients;
  image;

  ngOnInit

  constructor (private api: Api) {}

  getAllRecipes = () => {
    this.api.getRecipe().subscribe((data: ApiData) => {
      this.recipes = data.hits;
      
      console.log(data.hits);
    });
  }
  

}
