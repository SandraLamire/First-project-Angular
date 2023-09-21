import { Component } from '@angular/core';
// import nécessaires aux formulaires
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  // ajout login pour qui soit dispo dans la vue
  login: string = "";

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

// Définition de la fonction de validation personnalisée
// qui renvoie un ValidatorFn qui sera utilisé pour valider un champ de formulaire
dateValidator(): ValidatorFn {
  // Retourne une fonction qui prend un AbstractControl en argument
  return (control: AbstractControl): { [key: string]: any } | null => {
    // Vérifie que 'this' et 'this.monFormulaire' existent
    if (this && this.monFormulaire) {
      // Vérifie que le contrôle passé en argument existe et a une valeur non nulle
      if (control && control.value) {
        // Convertit la valeur du contrôle en objet Date
        const birthdate = new Date(control.value);
        // Obtient la date actuelle
        const today = new Date();
        // Définit les heures, minutes, secondes et millisecondes de 'today' à zéro
        today.setHours(0, 0, 0, 0);
        
        // Compare la date de naissance avec la date actuelle
        if (birthdate > today) {
          // Si la date de naissance est postérieure à la date actuelle,
          // retourne un objet avec la clé "max" définie sur true pour indiquer une validation échouée
          return { max: true };
        }
      }
    }
    
    // Si toutes les conditions sont satisfaites, 
    // retourne null pour indiquer que la validation a réussi
    return null;
  };
}

