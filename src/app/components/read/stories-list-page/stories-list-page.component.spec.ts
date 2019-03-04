import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesListPageComponent } from './stories-list-page.component';

describe('StoriesListPageComponent', () => {
  let component: StoriesListPageComponent;
  let fixture: ComponentFixture<StoriesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
