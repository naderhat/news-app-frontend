import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selected-category',
  templateUrl: './selected-category.component.html',
  styleUrls: ['./selected-category.component.css']
})
export class SelectedCategoryComponent implements OnInit {
  @Input() categoryName: string;
  @Output() categoryRemoved: EventEmitter<string>;

  constructor() {
    this.categoryRemoved = new EventEmitter<string>();
  }

  ngOnInit() {}

  removeCategory(category: string) {
    this.categoryRemoved.emit(this.categoryName);
  }
}
