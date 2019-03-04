import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStoriesComponent } from './search-stories.component';

describe('SearchStoriesComponent', () => {
  let component: SearchStoriesComponent;
  let fixture: ComponentFixture<SearchStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
