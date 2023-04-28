import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersTablaComponent } from './characters-tabla.component';

describe('CharactersTablaComponent', () => {
  let component: CharactersTablaComponent;
  let fixture: ComponentFixture<CharactersTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
