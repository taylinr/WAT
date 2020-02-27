import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpUserCreateComponent } from './wp-user-create.component';

describe('WpUserCreateComponent', () => {
  let component: WpUserCreateComponent;
  let fixture: ComponentFixture<WpUserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpUserCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
