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
 
  // @Input() event: Event;
  // @Input() favorites: Recipe[];


  constructor(private api: Api) { }
  

  ngOnInit() {
  }




}
