import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

type WikipediaResponse = {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
      wordcount: number;
    }[];
  };
};

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private httpClient: HttpClient) {}

  search(searchTerm: string) {
    return this.httpClient
      .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: searchTerm,
          origin: '*',
        },
      })
      .pipe(map((response) => response.query.search));
  }
}
