# Affichage conditionnel d'un bloc de texte, afficher le nom de l'utilisateur en rouge si il s'appelle 'Administrateur'

## Objectifs

Modifier l'exemple pour afficher le message de bienvenue seulement si le nom contient au moins une lettre.
Afficher le nom d'utilisateur en rouge si le nom est égal à "Administrateur"

## Manipulation

1. Dans la vue, on ajoute la directive *ngIf :

```html{style="font-size: 14pt"}
<form>
  <label for="name">Nom :</label>
  <input type="text" [(ngModel)]="name" name="name" id="name">
  <button type="button" (click)="resetName()">Reset</button>
</form>
<div *ngIf="name && name.trim().length > 0">Bienvenue <span [ngClass]="name==='Administrateur' ? 'red' : ''">{{name}}</span></div>
```

2. Dans le fichier CSS :

```css{style="font-size: 14pt"}
.red {
  color: red;
}
```