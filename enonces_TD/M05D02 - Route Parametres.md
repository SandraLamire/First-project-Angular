---
marp: true
---

## Objectifs

Reprendre la démonstration précédente.
Créer une route qui redirige vers un nouveau composant "espace personnel" au clic sur le bouton "S'inscrire". Lorsque l'utilisateur passe du composant "inscription" au composant "espace personnel", le login est passé en paramètre, récupéré et affiché sur l'espace personnel.

## Manipulation

1. Créer un nouveau composant pour l'espace personnel en utilisant la commande `ng generate component` dans le terminal. Par exemple : `ng generate component espace-personnel`.

2. Ensuite, il faut créer une nouvelle route pour le composant "espace personnel". On peut le faire dans le fichier app-routing.module.ts en ajoutant la ligne suivante : 
```typescript{style="font-size: 14pt"}
{ path: 'espace-personnel/:login', component: EspacePersonnelComponent }
```
Le paramètre "login" sera utilisé pour transmettre le login de l'utilisateur à la route.

3. Dans le template du composant inscription, il faut ajouter le directive ngModel pour lier le champ login avec le modèle utilisateur, de la manière suivante : 
```html{style="font-size: 14pt"}
<input type="text" name="login" id="login" [(ngModel)]="login">
```

4. Dans le controleur du composant inscription, il faut déclarer un nouvel attribut `login`
```typescript{style="font-size: 14pt"}
login: string = "";
```

4. Ensuite, il faut ajouter au bouton "S'inscrire" le directive routerLink pour rediriger vers notre nouvelle route. On peut le faire de la manière suivante : 
```html{style="font-size: 14pt"}
<button type="submit" [routerLink]="['/espace-personnel', login]">S'inscrire</button>
```

5. Dans le composant "espace personnel", il faut importer le module ActivatedRoute pour récupérer le paramètre "login". On peut ensuite le récupérer dans la méthode ngOnInit() de la manière suivante :
```typescript{style="font-size: 14pt"}
  login: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('login') != null) {
      this.login = this.route.snapshot.paramMap.get('login')!;
    }
  }
```

6. Finalement, il ne reste qu'à afficher le login dans le template du composant "espace personnel" : 
```html{style="font-size: 14pt"}
<h1>Bienvenue dans votre espace personnel, {{login}} !</h1>
```