import { Component, OnInit, Input } from '@angular/core';
import { Source } from 'src/app/source';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  @Input()
  source: Source;

  constructor() { }

  ngOnInit() {
  }

}
