import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteBaseComponent } from './write-base.component';

describe('WriteBaseComponent', () => {
  let component: WriteBaseComponent;
  let fixture: ComponentFixture<WriteBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
