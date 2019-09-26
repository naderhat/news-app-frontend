import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-api.service';

@Component({
  selector: 'app-sources-list',
  templateUrl: './sources-list.component.html',
  styleUrls: ['./sources-list.component.css']
})
export class SourcesListComponent implements OnInit {
  sources;

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit() {
    this.newsApiService.getSources().subscribe(result => {
      this.sources = result['sources'];
    });
  }

}
