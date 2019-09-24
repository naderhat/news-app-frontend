import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTopHeadlinesComponent } from './search-top-headlines.component';

describe('SearchTopHeadlinesComponent', () => {
  let component: SearchTopHeadlinesComponent;
  let fixture: ComponentFixture<SearchTopHeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTopHeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTopHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
