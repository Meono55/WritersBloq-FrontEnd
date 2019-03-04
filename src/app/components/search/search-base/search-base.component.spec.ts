import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBaseComponent } from './search-base.component';

describe('SearchBaseComponent', () => {
  let component: SearchBaseComponent;
  let fixture: ComponentFixture<SearchBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
