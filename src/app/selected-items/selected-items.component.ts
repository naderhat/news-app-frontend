import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-selected-items',
  templateUrl: './selected-items.component.html',
  styleUrls: ['./selected-items.component.css']
})
export class SelectedItemsComponent implements OnInit, OnChanges {
  @Input() items: Array<string>;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    console.log('on change');
    console.log(this.items);
  }
}
