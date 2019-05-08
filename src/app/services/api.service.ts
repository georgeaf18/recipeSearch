import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()

export class Api {
    appId: string = '00a41518';
    appKey: string = '482baab8eed3d4133ec335372e8171b8';
    recipeUrl: string;
    fromNumber: number = 0;
    toNumber: number = 20;
    
    

    constructor( private http: HttpClient) {}
    
    getRecipe = (query, healthValue, numberIngr) => {
        return this.http.get(this.recipeUrl = `https://api.edamam.com/search?q=${query || ""}&app_id=${this.appId}&app_key=${this.appKey}&from=${this.fromNumber}&to=${this.toNumber}&health=${healthValue}&ingr=${numberIngr}`)
    }
}