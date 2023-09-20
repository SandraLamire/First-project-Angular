import { Component } from '@angular/core';
// import du système de route
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-espace-personnel',
  templateUrl: './espace-personnel.component.html',
  styleUrls: ['./espace-personnel.component.css']
})
export class EspacePersonnelComponent {
  
  login: string = "";
  // ajout constructeur pour activation des routes 
  // + router pour goHome
  constructor(private route: ActivatedRoute, private router: Router) {}

  // capturer un paramètre de route nommé 'login' 
  // à partir de l'URL de la page et l'assigner à une variable locale this.login 
  ngOnInit() {
    if (this.route.snapshot.paramMap.has('login') != null) {
      this.login = this.route.snapshot.paramMap.get('login')!;
    }
  }

  // fonction pour retour à l'accueil au clic du bouton
  goHome($event: Event) {
    console.log('event', $event);
    $event.preventDefault();
    this.router.navigate(['/']);
  }
}
