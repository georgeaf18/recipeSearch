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
  health: string = 'alcohol-free';
  caloriesRange: string = '1+';
  // health: string = 'alcohol-free';

  constructor(private api: Api) { }

  ngOnInit() {
    
  }

  filterRecipes = () => {
    this.api.getRecipe(this.searchInput, this.health, encodeURIComponent(this.caloriesRange) ).subscribe((data: ApiData) => {
      this.recipes = data.hits;
    });

    console.log(this.health);
  }
}
