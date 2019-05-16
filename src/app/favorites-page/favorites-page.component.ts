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

    this.favorites = this.api.favorites;
  }

  
  removeFavorite = (recipeIndex) => {
    this.api.removeFavorite(this.favorites[recipeIndex]);
    this.favorites = this.favorites.filter((item, index) => index !== recipeIndex);

  };



  show = (i) => {
    this.modalRecipe = this.favorites[i].recipe;
  }


}