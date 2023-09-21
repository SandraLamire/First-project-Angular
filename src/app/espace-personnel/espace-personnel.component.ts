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

  message: string = ''; // Variable de modèle pour stocker le message

  /* Fonctions bipLong et bipCourt utilisées pour callback et promise */
  bipLong(callback: Function) {
    // jouez un bip sonore long d'une seconde
    setTimeout(() => {
      this.message += '-\n';
      callback();
    }, 1000);
  }

  bipCourt(callback: Function) {
    // jouez un bip sonore court d'une dixième de seconde
    setTimeout(() => {
      this.message += '.\n';
      callback();
    }, 1000);
  }

  /* CALLBACK */
  sosCallback() {
    this.bipCourt(() => {
      this.bipCourt(() => {
        this.bipCourt(() => {
          this.bipLong(() => {
            this.bipLong(() => {
              this.bipLong(() => {
                this.bipCourt(() => {
                  this.bipCourt(() => {
                    this.bipCourt(() => {
                      this.message += "STOP";
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  /* ASYNC/AWAIT */
  async sosAsyncAwait(): Promise<void> {
    this.message = '.\n';
    await this.sleep(1000); // Attendez une seconde
    this.message += '.\n';
    await this.sleep(1000); // Attendez une seconde
    this.message += '.\n';
    await this.sleep(1000); // Attendez une seconde
    this.message += '-\n';
    await this.sleep(1000); // Attendez une seconde
    this.message += '-\n';
    await this.sleep(1000); // Attendez une seconde
    this.message += '-\n';
    await this.sleep(1000); // Attendez une seconde
    this.message += '.\n';
    await this.sleep(1000); // Attendez une seconde
    this.message += '.\n';
    await this.sleep(1000); // Attendez une seconde
    this.message += '.\n';
    await this.sleep(1000); // Attendez une seconde
    this.message += '\t STOP';
  }

  // Fonction personnalisée pour attendre un certain temps (simule le setTimeout qui est moins lisible)
  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }


}
