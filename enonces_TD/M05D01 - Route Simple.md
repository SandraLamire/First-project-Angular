---
marp: true
---

## Objectifs

Créer une route qui dirige vers une page `inscription` depuis la page d'accueil. Cette page affiche un formulaire avec un login, un mot de passe et un bouton "S'inscrire".

## Manipulation

0. Créer un nouveau projet en choisissant "Yes" lorsque le prompt demande si on veut utiliser le rootage

1. Créer un nouveau composant pour la page d'accueil en utilisant la commande `ng generate component` dans le terminal. Par exemple : `ng generate component accueil`.

2. Créer un nouveau composant pour la page d'inscription en utilisant la commande `ng generate component` dans le terminal. Par exemple : `ng generate component inscription`.

2. Ouvrir le fichier `app-routing.module.ts` et importer le composant d'inscription en haut du fichier :
   ```typescript{style="font-size: 14pt"}
   import { AccueilComponent } from './accueil/accueil.component';
   import { InscriptionComponent } from './inscription/inscription.component';
   ```

3. Ajouter une nouvelle route vers le composant d'inscription en utilisant la méthode `RouterModule.forRoot()` :
   ```typescript{style="font-size: 14pt"}
   const routes: Routes = [
     { path: '', component: AccueilComponent }
     { path: 'inscription', component: InscriptionComponent }
   ];
   ```

4. Remplacer le contenu du composant `app.component.ts` avec la directive `<router-outlet></router-outlet>` pour afficher le composant courant

```html{style="font-size: 14pt"}
<router-outlet></router-outlet>
```

4. Maintenant, il faut ajouter un lien vers cette nouvelle page d'inscription dans le template du composant d'accueil `accueil.component.html`, en utilisant la directive `routerLink` :
   ```html{style="font-size: 14pt"}
   <a routerLink="/inscription">S'inscrire</a>
   ```

6. Enfin, pour afficher le formulaire avec le login, le mot de passe et le bouton "S'inscrire", ouvrir le fichier `inscription.component.html` et ajouter le code HTML correspondant :
   ```html{style="font-size: 14pt"}
   <h1>Inscription</h1>
   <form>
     <div>
       <label for="login">Login:</label>
       <input type="text" name="login" id="login">
     </div>
     <div>
       <label for="mot_de_passe">Mot de passe:</label>
       <input type="password" name="mot_de_passe" id="mot_de_passe">
     </div>
     <button type="submit">S'inscrire</button>
   </form>
   ```