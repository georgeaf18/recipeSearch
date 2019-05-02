import { Component, OnInit } from '@angular/core';
import {Api} from '../services/api.service'

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [Api]
})
export class RecipeListComponent implements OnInit {


  ngOnInit

  constructor (private api: Api) {}

  getAllRecipes = () => {
    this.api.getRecipe().subscribe(data => console.log(data))
  }
  

}
