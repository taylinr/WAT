import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteCreateComponent } from './website-create.component';

describe('WebsiteCreateComponent', () => {
  let component: WebsiteCreateComponent;
  let fixture: ComponentFixture<WebsiteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
