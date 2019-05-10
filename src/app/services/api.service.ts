import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class Api {
    appId: string = '00a41518';
    appKey: string = '482baab8eed3d4133ec335372e8171b8';
    recipeUrl: string;
    
    private _recipes = new BehaviorSubject([]);
    recipes = this._recipes.asObservable();

    constructor( private http: HttpClient) {}
    
    getRecipe = (query, healthValue, numberIngr, pagFrom, pagTo) => {
        return this.http.get(this.recipeUrl = `https://api.edamam.com/search?q=${query || ""}&app_id=${this.appId}&app_key=${this.appKey}&from=${pagFrom}&to=${pagTo}&health=${healthValue}&ingr=${numberIngr}`)
    }

    updateRecipes = newList => this._recipes.next(newList);
}