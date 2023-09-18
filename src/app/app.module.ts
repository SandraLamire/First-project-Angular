import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
// formsModule import
import { FormsModule } from '@angular/forms';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
