import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppSettingsService } from '../services/app-settings.service';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.css']
})
export class NewsCategoryComponent implements OnInit {
  @Output()
  categorySelected = new EventEmitter<string>();
  selectedCategory;
  categories;

  constructor(private appSettingService: AppSettingsService) {}

  ngOnInit() {
    this.appSettingService.getNewsCategories().subscribe(data => {
      this.categories = data;
    });

    this.selectedCategory = '';
  }

  selected() {
    this.categorySelected.emit(this.selectedCategory);
  }
}
