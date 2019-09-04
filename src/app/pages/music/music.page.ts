import { DiscogsService, SearchType } from './../../services/discogs.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = "";
  type: SearchType = SearchType.all;

  constructor(private discogsService: DiscogsService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.discogsService.searchDatabase(this.searchTerm, this.type);
  }

}
