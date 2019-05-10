import { Component, OnInit, Input,  } from '@angular/core';
import { Api } from '../services/api.service'
import { RecipeListComponent } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
  providers: [Api]
})


export class FavoritesPageComponent implements OnInit {
 favorites = any;
  // @Input() event: Event;
  // @Input() favorites: Recipe[];


  constructor(private api: Api) { }
  

  ngOnInit() {
  }


  // addFavorite = (i) => {
  //   this.recipes[i].bookmarked = true;
  //    this.favorites.push(this.recipes[i]);
  //   };
  
    
    unFavorite = (index) => {
      this.favorites[index].bookmarked = false;
      this.favorites.splice(index, 1);
    }


}
