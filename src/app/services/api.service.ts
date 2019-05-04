import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()


    appId: string = '00a41518';
    appKey: string = '482baab8eed3d4133ec335372e8171b8';
    recipeUrl: string;
    fromNumber: number = 0;
    toNumber: number = 6;


    constructor( private http: HttpClient) {}
    
    getRecipe = () => {

            return this.http.get(this.recipeUrl = `https://api.edamam.com/search?q=pork&app_id=${this.appId}&app_key=${this.appKey}&from=${this.fromNumber}&to=${this.toNumber}&health=alcohol-free`)
            
            
    }
    
}