import { Component } from '@angular/core';
// import nécessaires aux formulaires
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    // lier la fonction dateValidator au contexte actuel (this) à l'aide de la méthode bind
    birthdate: new FormControl('', [Validators.required, this.dateValidator.bind(this)]),
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

  dateValidator(): {[key: string]: any} | null {
    if (this.monFormulaire) {
      const control = this.monFormulaire.get('birthdate');
      if (control && control.value) {
        const birthdate = new Date(control.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (birthdate > today) {
          return {max: true};
        }
      }
    }
    return null;
  }

  


}
