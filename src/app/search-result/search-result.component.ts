import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Article } from 'src/app/article';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input()
  article: Article;

  constructor() { }

  ngOnInit() {

  }

}
