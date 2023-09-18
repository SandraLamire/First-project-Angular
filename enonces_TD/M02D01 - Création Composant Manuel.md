# Objectifs

Créer un composant manuellement

# Manipulations

## Étape 1 : Création d'un répertoire pour le composant

Créez un nouveau répertoire où vous stockerez les fichiers du composant.

```
cd src/app
mkdir mon-composant
cd mon-composant
```

---

## Étape 2 : Création du fichier de template

Créez un fichier HTML pour le template du composant.

```
touch mon-composant.component.html
```

---

## Étape 3 : Création du fichier de style

Créez un fichier CSS pour le style du composant.

```
touch mon-composant.component.css
```

---

## Étape 4 : Création du fichier de composant

Créez un fichier TypeScript pour le composant.

```
touch mon-composant.component.ts
```

---

## Étape 5 : Ajout des imports

Ajoutez les imports nécessaires en haut du fichier de composant.

```typescript{style="font-size: 14pt"}
import { Component } from '@angular/core';
```

---

## Étape 6 : Ajout du décorateur @Component

Ajoutez le décorateur @Component au-dessus de la classe de composant pour définir les propriétés du composant.

```typescript{style="font-size: 14pt"}
@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent {
  // contenu de la classe du composant
}
```

Notez que le sélecteur est défini en tant que `app-mon-composant`.

---

## Étape 7 : Utilisation du template et du style

Utilisez le template et le style dans les fichiers HTML et CSS

HTML : 
<h2>HELLO WORLD</h2>
```

CSS : 
```css{style="font-size: 14pt"}
h2 {
  color: blue;
}
```

---

## Étape 8 : Déclaration du composant dans le module

Déclarez le composant dans le module en tant que fournisseur dans le module de l'application `app.module.ts`.

```typescript{style="font-size: 14pt"}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MonComposantComponent } from './mon-composant.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MonComposantComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

---

## Étape 9 : Utilisation du composant

Utilisez le composant dans votre application en ajoutant le sélecteur dans un autre template (par exemple `app.component.html`).

```html{style="font-size: 14pt"}
<app-mon-composant></app-mon-composant>
```