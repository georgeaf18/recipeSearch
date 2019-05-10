import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { Api } from './services/api.service';
import { SearchCriteriaComponent} from './search-criteria/search-criteria.component'


const appRoutes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: 'favorites', component: FavoritesPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    FavoritesPageComponent,
    SearchCriteriaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
