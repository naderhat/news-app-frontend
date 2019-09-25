import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  clearSearchResult() {
    this.change.emit(true);
  }
}
