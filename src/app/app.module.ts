import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { RecipesRoutingModule } from './recipes/recipe-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, ///all features of common module  
    HttpModule,
    AppRoutingModule,
    ShoppingListModule,
    SharedModule,
    FormsModule,
    AuthModule,
    CoreModule
  ],
  providers: [], // in core module
  bootstrap: [AppComponent]
})
export class AppModule { }
