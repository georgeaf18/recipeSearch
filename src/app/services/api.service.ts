import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()

export class Api {
    appId = '00a4151';
    recipeUrl = 'https://api.edamam.com/search?q=chicken+parmesan&app_id=00a41518&app_key=482baab8eed3d4133ec335372e8171b8&from=0&to=6'
    constructor( private http: HttpClient) {}
    
    getRecipe = () => {

            // this.recipeUrl = `https://api.edamam.com/search?q=chicken+parmesan&app_id=${this.appId}&app_key=482baab8eed3d4133ec335372e8171b8&from=1&to=6`
            
            return this.http.get(this.recipeUrl);

            
        }
    
}