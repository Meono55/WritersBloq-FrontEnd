import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStoryCardComponent } from './my-story-card.component';

describe('MyStoryCardComponent', () => {
  let component: MyStoryCardComponent;
  let fixture: ComponentFixture<MyStoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
