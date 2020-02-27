import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpUserListComponent } from './wp-user-list.component';

describe('WpUserListComponent', () => {
  let component: WpUserListComponent;
  let fixture: ComponentFixture<WpUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
