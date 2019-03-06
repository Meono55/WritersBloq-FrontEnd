import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBaseComponent } from './story-base.component';

describe('StoryBaseComponent', () => {
  let component: StoryBaseComponent;
  let fixture: ComponentFixture<StoryBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
