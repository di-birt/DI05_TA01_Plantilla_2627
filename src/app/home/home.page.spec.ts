import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { HomePage } from './home.page';

// describe agrupa las pruebas relacionadas con una unidad.
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  // Se ejecuta antes de cada it para evitar que un test contamine a otro.
  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    // Sin esta llamada, los cambios del componente todavía no se reflejan en el DOM.
    fixture.detectChanges();
  });

  // it describe una sola expectativa de comportamiento.
  it('crea la página', () => {
    // expect inicia la afirmación y toBeTruthy comprueba que existe una instancia.
    expect(component).toBeTruthy();
  });

  describe('Comprobar si es mayor de edad -> mayorDeEdad', () => {
    
  });

  describe('Calcular edad -> calcularEdad', () => {
    
  });

  describe('Comprobar mayoría de edad por año -> esMayorDeEdadPorAño', () => {
    
  });
});
