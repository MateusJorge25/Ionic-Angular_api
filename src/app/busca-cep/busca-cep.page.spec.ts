import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscaCepPage } from './busca-cep.page';

describe('BuscaCepPage', () => {
  let component: BuscaCepPage;
  let fixture: ComponentFixture<BuscaCepPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuscaCepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
