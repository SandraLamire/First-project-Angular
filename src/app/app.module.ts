import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
// formsModule import
import { FormsModule } from '@angular/forms';
// import des services
import { UserService } from './services/user.service';
import { UserDataService } from './services/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    // enregistrer le composant ici
    MyComponentComponent 
  ],
  imports: [
    BrowserModule,
    // enregistrer formsModule ici
    FormsModule
  ],
  // enregistrer les services ici
  providers: [UserService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
