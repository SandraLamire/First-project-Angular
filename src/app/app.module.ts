import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
// formsModule import
import { FormsModule } from '@angular/forms';
// import du service
import { UserService } from './services/user.service';

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
  // enregistrer le service ici
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
