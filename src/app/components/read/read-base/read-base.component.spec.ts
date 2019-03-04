import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBaseComponent } from './read-base.component';

describe('ReadBaseComponent', () => {
  let component: ReadBaseComponent;
  let fixture: ComponentFixture<ReadBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
