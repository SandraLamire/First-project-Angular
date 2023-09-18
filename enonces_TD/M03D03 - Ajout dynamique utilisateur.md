# Ajouter et supprimer des utilisateurs dynamiquement et afficher la liste à l'écran

## Objectifs

Modifier l'exemple pour ajouter un bouton "Ajouter" qui ajoute dans une liste le nom d'utilisateur.
Afficher la liste des utilisateurs grâce à la directive ngFor
Ajouter un bouton "Supprimer" à côté de chaque nom d'utilisateur qui supprime le nom d'utilisateur lorsque l'on clique dessus

## Manipulation

1. Dans la vue :

```html{style="font-size: 14pt"}
<form>
  <label for="name">Nom :</label>
  <input type="text" [(ngModel)]="name" name="name" id="name">
  <button type="button" (click)="resetName()">Reset</button>
  <button type="button" (click)="addUser()">Ajouter</button>
</form>
<div>Bienvenue {{name}}</div>
<ul>
  <li *ngFor="let user of users">{{user}}
    <button type="button" (click)="removeUser(user)">Supprimer</button>
  </li>
</ul>
```

2. Dans le contrôleur :

```typescript{style="font-size: 14pt"}
name: string = '';
users: string[] = [];

resetName() {
  this.name = '';
}

addUser() {
  if (this.name) {
    this.users.push(this.name);
    this.name = '';
  }
}

removeUser(user: string) {
  const index = this.users.indexOf(user);
  if (index !== -1) {
    this.users.splice(index, 1);
  }
}
```