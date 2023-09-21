---
marp: true
---

## Objectifs

Reprendre la démonstration précédente et ajouter les bonnes directives Angular pour valider les données saisies par l'utilisateur et, si le formulaire est valide, créer un objet JSON qui contient toutes les informations (pour être envoyé à une API par exemple).
Les règles de validation sont les suivantes :
- Le mail est obligatoire et doit être valide
- Le mot de passe est obligatoire et doit faire au moins 6 caractères
- La date de naissance n'est pas obligatoire, mais si elle est saisie, elle ne doit pas dépasser la date du jour (cela nécessite un validateur personnalisé)
- Le niveau de connaissance est obligatoire et ne doit pas être inférieur à 0, ni supérieur à 10
Afficher les messages d'erreurs si l'un des champs est invalide

## Manipulation

Voici les étapes à suivre pour ajouter les bonnes directives Angular au code HTML et créer un objet JSON contenant toutes les informations saisies par l'utilisateur :

1. Dans le fichier de module de l'application, importer les modules suivants : ReactiveFormsModule et FormsModule.

2. Dans le code HTML, ajouter l'attribut "formGroup" à la balise <form> et lier le formulaire (this.monFormulaire) créé dans le controleur grâce à la directive ngForm.

3. Ajouter la directive ngIf pour afficher un message d'erreur si un champ est invalide.

4. Ajouter une fonction onSubmit() dans le controleur qui sera appelée lorsque l'utilisateur soumettra le formulaire.

4. Dans la fonction onSubmit(), vérifier si le formulaire est valide avec la méthode "valid" du formulaire.

6. Si le formulaire est valide, créer un objet JSON qui contient toutes les informations saisies par l'utilisateur.

```html{style="font-size: 14pt"}
<form [formGroup]="monFormulaire" (ngSubmit)="onSubmit()" #f="ngForm">
  <label for="nom">Nom: </label>
  <input type="text" id="nom" name="nom" formControlName="nom">
  <div *ngIf="monFormulaire.get('nom')?.errors?.['required']">Nom requis</div>

  <label for="email">Adresse mail: </label>
  <input type="email" id="email" name="email" formControlName="email">
  <div *ngIf="monFormulaire.get('email')?.errors?.['required']">Adresse mail requise</div>
  <div *ngIf="monFormulaire.get('email')?.errors?.['email']">Adresse mail invalide</div>

  <label for="password">Mot de passe: </label>
  <input type="password" id="password" name="password" formControlName="password">
  <div *ngIf="monFormulaire.get('password')?.errors?.['required']">Mot de passe requis</div>
  <div *ngIf="monFormulaire.get('password')?.errors?.['minlength']">Le mot de passe doit contenir au moins 6 caractères</div>

  <label for="birthdate">Date de naissance: </label>
  <input type="date" id="birthdate" name="birthdate" formControlName="birthdate">
  <div *ngIf="monFormulaire.get('birthdate')?.errors?.['max']">La date de naissance ne peut pas être supérieure à la date du jour</div>

  <label>
      Connaissez-vous Angular ? (1 à 10)
      <input type="range" name="knowledge" formControlName="knowledge" min="1" max="10" required>
  </label>
  <div *ngIf="monFormulaire.get('knowledge')?.errors?.['required']">Le niveau de connaissance est requis</div>
  <div *ngIf="monFormulaire.get('knowledge')?.errors?.['min'] || monFormulaire.get('knowledge')?.errors?.['max']">Le niveau de connaissance doit être compris entre 1 et 10</div>

  <button type="submit">Soumettre</button>

</form>
```

```typescript{style="font-size: 14pt"}
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  monFormulaire = new FormGroup({
    nom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    birthdate: new FormControl('', this.dateValidator()),
    knowledge: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(10)])
  });

  onSubmit() {
    if (this.monFormulaire.valid) {
      const formData = {
        nom: this.monFormulaire.value.nom,
        email: this.monFormulaire.value.email,
        password: this.monFormulaire.value.password,
        birthdate: this.monFormulaire.value.birthdate || '',
        knowledge: this.monFormulaire.value.knowledge
      };
      console.log(formData);
      // Envoie l'objet formData à une API par exemple
    } else {
      console.log("Formulaire invalide");
    }
  }

   dateValidator(): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } | null => {
        if (this && this.monFormulaire) {
          if (control && control.value) {
            const birthdate = new Date(control.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (birthdate > today) {
              return { max: true };
            }
          }
        }
        return null;
      };
  }

}
```
