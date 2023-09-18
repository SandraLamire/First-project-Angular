# Saisie et affichage dynamique du nom d'utilisateur

## Objectifs

Ajouter un champs texte pour la saisie du nom utilisateur et afficher un message de bienvenue à l'utilisateur qui utilise ce nom.
Ajouter un bouton "Reset" qui remet à zéro le nom de l'utilisateur.

## Manipulation

1. Dans le fichier app.module.ts :
  - Ajouter l'import du module `FormsModule`

```typescript{style="font-size: 14pt"}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Dans le fichier HTML du composant : 
  - Ajouter un formulaire avec un `input` et un bouton "reset"
  - Binder l'`input` à une propriété du composant avec [(ngModel)]
  - Ajouter un bouton reset avec `(click)` qui appelle une fonction `resetName()`

```html{style="font-size: 14pt"}
<form>
  <label for="name">Nom :</label>
  <input type="text" [(ngModel)]="name" name="name" id="name">
  <button type="button" (click)="resetName()">Reset</button>
</form>
<div>Bienvenue {{name}}</div>
```

3. Dans le fichier TypeScript du composant : 
  - Créer une propriété pour stocker le nom saisi par l'utilisateur (`name`)
  - Créer une fonction `resetName()` qui attribue une chaîne de caractères vide à `name`
  - Binder la propriété `name` au contenu du `div` sous l'`input`

```typescript{style="font-size: 14pt"}
name: string = '';

resetName() {
  this.name = '';
}
```