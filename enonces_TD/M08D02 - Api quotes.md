---
marp: true
---

## Objectifs


## Manipulations

1. Créer une interface qui permet de structurer les données reçues par l'API (d'utiliser l'autocomplétion, la vérification à compilation, etc.)
```
ng generate interface quote
```

2. Peupler l'interface avec deux propriétés (issues de la documentation de l'API) `quote` et `author`

```typescript{style="font-size: 14pt"}
export interface Quote {
    quote: string;
    author: string;
}
```


1. Créer un nouveau service en utilisant la commande Angular CLI suivante :
```
ng generate service quotes
```

2. Dans le fichier `quotes.service.ts`, importer les modules suivants :
```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
```

3. Importer le module `HttpClientModule` dans le module `app.module.ts` :
```typescript{style="font-size: 14pt"}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

3. Injecter le `HttpClient` dans le constructeur du service :
```
constructor(private http: HttpClient) { }
```

4. Créer une méthode `getQuote()` qui va interroger l'API zenquotes en utilisant `http.get` :
```
async getQuote(): Promise<any> {
    try {
      let quote = await this.http.get<Quote>('https://api.goprogram.ai/inspiration').toPromise();
      if (quote && quote.quote && quote.author) {
        return quote;
      }
      throw new Error('No quote found');
    } catch (error) {
      console.error(error);
    }
  }
```

5. Dans le composant qui va afficher la citation (app.component.ts), importer le service `QuotesService` :
```
import { QuotesService } from './quotes.service';
```

6. Injecter le service `QuotesService` dans le constructeur du composant :
```
constructor(private quotesService: QuotesService) { }
```

7. Dans la méthode `ngOnInit()` du composant, appeller la méthode `getQuote()` du service et souscris à l'observable retourné :
```typescript{style="font-size: 14pt"}
public quote: string = "";
public author: string = "";

constructor(private quotesService: QuotesService) { }

async ngOnInit() {
    let randomQuote = await this.quotesService.getQuote();
    if (randomQuote) {
        this.quote = randomQuote.quote;
        this.author = randomQuote.author;
    }
}
```

8. Dans le template du composant, affiche la citation et l'auteur en utilisant les variables `quote` et `author` :
```
<p>{{quote}}</p>
<p>{{author}}</p>
```