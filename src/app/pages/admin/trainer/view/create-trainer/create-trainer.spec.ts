import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainer } from './create-trainer';

describe('CreateTrainer', () => {
  let component: CreateTrainer;
  let fixture: ComponentFixture<CreateTrainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTrainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
