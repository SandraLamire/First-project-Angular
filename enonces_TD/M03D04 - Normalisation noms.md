# Normaliser l'affichage des noms d'utilisateur dans la liste

## Objectifs

Utiliser un pipe `titlecase` pour afficher les noms d'utilisateur avec une majuscule en première lettre

## Manipulation

1. Dans la vue :

```html{style="font-size: 14pt"}
<div>Bienvenue {{name | titlecase}}</div>
<ul>
  <li *ngFor="let user of users">{{user | titlecase}}
    <button type="button" (click)="removeUser(user)">Supprimer</button>
  </li>
</ul>
```