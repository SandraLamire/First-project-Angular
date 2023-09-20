import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import de formsModule et reactiveForms (pour formulaires complexes)
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
// import des nouveaux composants
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';

// import des services
import { UserService } from './services/user.service';
import { UserDataService } from './services/user-data.service';
import { AppRoutingModule } from './app-routing.module';
import { EspacePersonnelComponent } from './espace-personnel/espace-personnel.component';


@NgModule({
  declarations: [
    AppComponent,
    // enregistrer les composants ici
    MyComponentComponent,
    AccueilComponent,
    InscriptionComponent,
    EspacePersonnelComponent 
  ],
  imports: [
    BrowserModule,
    // enregistrer formsModule ici
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  // enregistrer les services ici
  providers: [UserService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
