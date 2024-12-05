import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtrar-precio',
  templateUrl: './filtrar-precio.component.html',
  styleUrls: ['./filtrar-precio.component.css'],
})
export class FiltrarPrecioComponent {
  precioMin: number | null = null;
  precioMax: number | null = null;

  @Output() filtrarPorPrecio = new EventEmitter<{ min: number | null; max: number | null }>();

  aplicarFiltro(): void {
    console.log('Filtrando con precios:', { min: this.precioMin, max: this.precioMax });
    this.filtrarPorPrecio.emit({ min: this.precioMin, max: this.precioMax });
  }
}
