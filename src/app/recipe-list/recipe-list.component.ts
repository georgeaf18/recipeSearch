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

}

interface Recipe {
  count: number;
  recipe: RecipeInfo[];

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

  constructor(private api: Api) { }

  ngOnInit() {
    this.api.getRecipe(null).subscribe((data: ApiData) => {
      this.recipes = data.hits.slice(0, 20);
    }); 
  }

  filterRecipes = () => {
    this.api.getRecipe(this.searchInput).subscribe((data: ApiData) => {
      this.recipes = data.hits;
    });
  }
}
