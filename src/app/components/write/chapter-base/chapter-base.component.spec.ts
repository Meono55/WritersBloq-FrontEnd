import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterBaseComponent } from './chapter-base.component';

describe('ChapterBaseComponent', () => {
  let component: ChapterBaseComponent;
  let fixture: ComponentFixture<ChapterBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
