import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import des nouveaux composants
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EspacePersonnelComponent } from './espace-personnel/espace-personnel.component';
import { ApiComponentComponent } from './api-component/api-component.component';

// si projet crée sans les routes, créer app-routing.module.ts avec : 
// ng generate module app-routing --flat --module=app ou
// ng new routing-app --routing --defaults
const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent},
  { path: 'espace-personnel/:login', component: EspacePersonnelComponent },
  { path: 'api', component: ApiComponentComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}