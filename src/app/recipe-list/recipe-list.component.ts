import { Component, OnInit } from "@angular/core";
import { Api } from "../services/api.service";

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
  recipe: RecipeInfo[];
  bookmarked: boolean;
}

interface ApiData {
  results: Recipe;
  hits: Recipe[];
}

@Component({
  selector: "recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  searchInput: String;
  health: string = "alcohol-free";
  numberIngr: string = "2+";
  pagFrom: number = 0;
  pagTo: number = 20;
  modalIndex: number;
  modalRecipe;
  modalUrl: string;

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.recipes.subscribe(data => {
      //console.log('favssss', this.api.favorites)
      this.recipes = data.map(item => {
        const recipe = this.api.favorites.find(
          i => i.recipe.image === item.recipe.image
        );
        item.bookmarked = false;
        if (recipe) {
          recipe.bookmarked = true;
          return recipe;
        } else {
          return item;
        }
      });
    });

    this.filterRecipes();
  }

  console = index => {
    console.log(this.recipes[index]);
  };

  show = i => {
    this.modalRecipe = this.recipes[i].recipe;
    this.modalUrl = this.modalRecipe.url;
  };

  changePag = where => {
    if (where === true) {
      this.pagFrom += 20;
      this.pagTo += 20;
      this.filterRecipes();
    } else if (where === false) {
      if (this.pagFrom > 0) {
        this.pagFrom -= 20;
        this.pagTo -= 20;
        this.filterRecipes();
      }
    }
  };

  filterRecipes = () => {
    this.api
      .getRecipe(
        this.searchInput,
        this.health,
        encodeURIComponent(this.numberIngr),
        this.pagFrom,
        this.pagTo
      )
      .subscribe((data: ApiData) => {
        this.api.updateRecipes(data.hits);
      });
  };

  newSearchCriteria = event => {
    this.searchInput = event;
  };

  addFavorite = recipeIndex => {
    this.recipes[recipeIndex].bookmarked = !this.recipes[recipeIndex]
      .bookmarked;
    this.api.addFavorite(this.recipes[recipeIndex]);
  };
}
