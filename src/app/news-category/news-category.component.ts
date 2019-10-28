import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges
} from '@angular/core';
import { AppSettingsService } from '../services/app-settings.service';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.css']
})
export class NewsCategoryComponent implements OnInit, OnChanges {
  @Input() categorySelected: string;
  @Output()
  categorySelectedChange = new EventEmitter<string>();
  selectedCategory;
  categories;

  constructor(private appSettingService: AppSettingsService) {
    this.categorySelectedChange = new EventEmitter<string>();
  }

  ngOnInit() {
    this.appSettingService.getNewsCategories().subscribe(data => {
      this.categories = data;
    });

    this.selectedCategory = '';
  }

  ngOnChanges() {
    this.selectedCategory = this.categorySelected;
  }

  selected() {
    this.categorySelectedChange.emit(this.selectedCategory);
  }
}
