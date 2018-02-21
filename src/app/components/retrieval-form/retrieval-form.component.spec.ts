import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievalFormComponent } from './retrieval-form.component';

describe('RetrievalFormComponent', () => {
  let component: RetrievalFormComponent;
  let fixture: ComponentFixture<RetrievalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrievalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
