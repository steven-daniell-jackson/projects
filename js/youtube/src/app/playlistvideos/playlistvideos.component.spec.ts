import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistvideosComponent } from './playlistvideos.component';

describe('PlaylistvideosComponent', () => {
  let component: PlaylistvideosComponent;
  let fixture: ComponentFixture<PlaylistvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
