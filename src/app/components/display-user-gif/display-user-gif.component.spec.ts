import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserGifComponent } from './display-user-gif.component';

describe('DisplayUserGifComponent', () => {
  let component: DisplayUserGifComponent;
  let fixture: ComponentFixture<DisplayUserGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUserGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
