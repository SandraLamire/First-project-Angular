---
marp: true
---

## Objectifs

Créer manuellement un service Singleton avec Angular sans utiliser la commande ng generate qui va stocker le nom de l'utilisateur courant. La vue doit proposer un input texte qui permet de saisir un nom d'utilisateur, un bouton qui permet de sauvegarder le nom dans le service et un autre qui permet de charger le nom depuis le service.

## Manipulation

1. Créer un nouveau dossier nommé services dans le répertoire src/app de notre projet Angular.

2. Créer manuellement un nouveau fichier nommé user.service.ts dans le dossier services que nous venons de créer. Ce fichier contiendra notre classe UserService.

3. Voici le code de notre UserService :

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser: string = "";

  constructor() { }

  setUserName(name: string) {
    this.currentUser = name;
  }

  getUserName() {
    return this.currentUser;
  }
}
```

4. Enregistrer le service dans le module `app.module.ts` et ajouter le module `FormsModule`

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
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

4. Dans le fichier app.component.ts, il faut importer UserService en ajoutant la ligne suivante au début du fichier :

```
import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = "";

  constructor(private userService: UserService) { }

  saveName() {
    this.userService.setUserName(this.userName);
    this.userName = '';
  }

  loadName() {
    this.userName = this.userService.getUserName();
  }
}
```

6. Dans le fichier app.component.html :

```
<h2>Please enter your username:</h2>
<input type="text" [(ngModel)]="userName">
<button (click)="saveName()">Save</button>
<button (click)="loadName()">Load</button>
```