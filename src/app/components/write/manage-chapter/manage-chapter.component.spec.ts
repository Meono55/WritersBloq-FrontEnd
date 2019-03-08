import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChapterComponent } from './manage-chapter.component';

describe('ManageChapterComponent', () => {
  let component: ManageChapterComponent;
  let fixture: ComponentFixture<ManageChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
