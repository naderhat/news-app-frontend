import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEverythingComponent } from './search-everything.component';

describe('SearchEverythingComponent', () => {
  let component: SearchEverythingComponent;
  let fixture: ComponentFixture<SearchEverythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEverythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEverythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
