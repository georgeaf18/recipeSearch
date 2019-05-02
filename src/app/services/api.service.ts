import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()

export class Api {
    recipeUrl = 'https://api.edamam.com/search?q=chicken&app_id=00a41518&app_key=482baab8eed3d4133ec335372e8171b8&from=0&to=3&calories=591-722&health=alcohol-free'

    constructor( private http: HttpClient) {}

        getRecipe = () => {
            return this.http.get(this.recipeUrl);
        }
    
}