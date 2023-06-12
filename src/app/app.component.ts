import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: {
    title: string;
    snippet: string;
    pageid: number;
    wordcount: number;
  }[] = [];

  constructor(private wikiService: WikipediaService) {}

  onSearchTermSubmitted(searchTerm: string) {
    this.wikiService.search(searchTerm).subscribe((response) => {
      this.pages = response;
    });
  }
}
