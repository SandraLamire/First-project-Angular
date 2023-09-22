import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-api-component',
  templateUrl: './api-component.component.html',
  styleUrls: ['./api-component.component.css']
})

export class ApiComponentComponent implements OnInit {
  public content: string = "";
  public author: string = "";

  constructor(private quotesService: QuotesService) { }

  async ngOnInit() {
      this.quotesService.getRandomQuote()
      .subscribe({
        next: randomQuote => { 
          if (randomQuote && randomQuote.content && randomQuote.author) {
            this.content = randomQuote.content;
            this.author = randomQuote.author;
            // Ajouter cette ligne pour afficher la citation récupérée dans la console
            console.log(randomQuote); 
          }
        },
        error: error => console.log(error)
      })
  }
}
