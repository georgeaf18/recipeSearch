
import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api.service';


@Component({
  selector: 'favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
  providers: [Api]
})
export class FavoritesPageComponent implements OnInit {
 

favorites: any[];

  constructor(private api: Api) { }


  ngOnInit() {
    this.api.recipes.subscribe(data => this.favorites = data.filter(recipe => recipe.bookmarked));
  }


}
