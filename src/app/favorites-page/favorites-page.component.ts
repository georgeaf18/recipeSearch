import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
 
favorites: any[];

  constructor(private api: Api) { }

  ngOnInit() {
    this.api.recipes.subscribe(data => this.favorites = data.filter(recipe => recipe.bookmarked));
  }

  
  addFavorite = (recipe) => {
    this.favorites[recipe].bookmarked = !this.favorites[recipe].bookmarked;
    this.api.updateRecipes(this.favorites);
  };
}
