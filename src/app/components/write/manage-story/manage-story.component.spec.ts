import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStoryComponent } from './manage-story.component';

describe('ManageStoryComponent', () => {
  let component: ManageStoryComponent;
  let fixture: ComponentFixture<ManageStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
