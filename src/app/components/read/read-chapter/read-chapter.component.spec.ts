import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadChapterComponent } from './read-chapter.component';

describe('ReadChapterComponent', () => {
  let component: ReadChapterComponent;
  let fixture: ComponentFixture<ReadChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
