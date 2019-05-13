import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
favorites: any[];
modalIndex: number;
modalRecipe: any[];
bookmarked: boolean;
recipes: any[];


  constructor(private api: Api) { }

  ngOnInit() {
    this.api.recipes.subscribe(data => {
      this.favorites = data.filter(recipe => recipe.bookmarked);
      this.recipes = data;
    });
  }

  
  addFavorite = (recipe) => {
    this.favorites[recipe].bookmarked = !this.favorites[recipe].bookmarked;

    this.api.updateRecipes(this.recipes);
  };



  show = (i) => {
    this.modalRecipe = this.favorites[i].recipe;
  }


}