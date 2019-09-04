import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { auth } from '../../environments/auth';

export enum SearchType {
  all = 'all',
  artist_name = 'artist_name',
  album_name = 'album_name'
}

@Injectable({
  providedIn: 'root'
})
export class DiscogsService {

  url = "https://api.discogs.com/";

  constructor(private http: HttpClient) { }

  searchDatabase(title: string, type?: SearchType):Observable<any> {
    return this.http
      .get(`${this.url}database/search?release_title=${title}&type=master`,{headers: new HttpHeaders().set('Authorization', `Discogs token=${auth.discogsToken}`)})
      .pipe(map(results => results['results']));
  }
}
