import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service';

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
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  constructor(private api: Api) { }

  ngOnInit() {
  }


  searchInput: String;
  health: string = 'alcohol-free';
  numberIngr: string = '2+';
  pagFrom: number = 0;
  pagTo: number = 20;



  filterRecipes = () => {

    this.api.getRecipe(this.searchInput, this.health, encodeURIComponent(this.numberIngr), this.pagFrom, this.pagTo ).subscribe((data: ApiData) => {
      this.api.updateRecipes(data.hits);
    });
    
    
  }

}
