import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { AppSettingsService } from '../services/app-settings.service';
import { Utility } from '../utility';
import { Observable } from 'rxjs';
import { Country } from '../country';

@Component({
  selector: 'app-selected-items',
  templateUrl: './selected-items.component.html',
  styleUrls: ['./selected-items.component.css']
})
export class SelectedItemsComponent implements OnInit, OnChanges {
  @Input() items: Array<string>;
  @Input() itemType: string;
  @Output() itemsChange: EventEmitter<Array<string>>;

  constructor(private appSettingsService: AppSettingsService) {
    this.itemsChange = new EventEmitter<Array<string>>();
  }

  ngOnInit() {}

  ngOnChanges() {}

  removeItem(itemName: string) {
    this.items = this.items.filter(item => item !== itemName);
    this.itemsChange.emit(this.items);
  }
}
