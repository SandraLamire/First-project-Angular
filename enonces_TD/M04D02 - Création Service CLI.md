---
marp: true
---

## Objectifs

Créer un service Angular avec la commande ng generate qui retourne un numéro de version et qui l'affiche à l'écran

## Manipulation

1. Ouvrir un nouveau terminal dans votre projet Angular et accéder à la racine de celui-ci.

2. Exécuter la commande suivante :

```
ng generate service services/nom-du-service
```

Remplacez "nom-du-service" par le nom que vous souhaitez donner à votre service. Par exemple, si vous souhaitez créer un service pour gérer les données utilisateur, vous pouvez l'appeler "user-data".

3. Ecrire le service

```typescript{style="font-size: 14pt"}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NomDuServiceService {

  constructor() { }

  getVersion(): string {
    return '1.0';
  }
}
```

4. Enregistrer le service dans le module `app.module.ts`

```typescript{style="font-size: 14pt"}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NomDuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

5. Injecter le service dans le controleur et récupérer la version

```typescript{style="font-size: 14pt"}
import { Component } from '@angular/core';
import { NomDuServiceService } from './services/nom-du-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version: string = "";

  constructor(private nomDuService: NomDuServiceService) {
    this.version = this.nomDuService.getVersion();
  }
}
```

6. Afficher le numéro de version dans la vue

```html{style="font-size: 14pt"}
<h1>Service v{{version}}</h1>
```