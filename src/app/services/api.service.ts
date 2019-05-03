import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()

export class Api {

    appId = '00a41518';
    appKey = '482baab8eed3d4133ec335372e8171b8';
    recipeUrl = 'https://api.edamam.com/search?q=chicken+parmesan&app_id=00a41518&app_key=&from=0&to=6'
    fromNumber = 0;
    toNumber = 6;

    constructor( private http: HttpClient) {}
    
    getRecipe = () => {

            return this.http.get(this.recipeUrl = `https://api.edamam.com/search?q=pork&app_id=${this.appId}&app_key=${this.appKey}&from=${this.fromNumber}&to=${this.toNumber}&health=alcohol-free`)
            
            
        }
    
}