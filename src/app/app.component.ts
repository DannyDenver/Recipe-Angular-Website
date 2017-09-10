import { RecipesService } from './recipes/recipes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipesService]

})
export class AppComponent {
  loadedFeature = 'recipe';

  // onNavigate(feature:string){
  //   this.loadedFeature = feature;
  // }
}
