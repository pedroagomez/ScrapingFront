import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ScrapingFront';
  searchQuery: string = '';
  mostrarFiltroPorPrecio: boolean = false;
  rangoPrecios: { min: number | null; max: number | null } = { min: null, max: null };

  onBuscar(query: string): void {
    this.searchQuery = query;
    console.log('Búsqueda:', this.searchQuery);
  }

  activarFiltroPorPrecio(): void {
    console.log('Mostrando formulario de filtro por precio');
    this.mostrarFiltroPorPrecio = true;
  }

  onFiltrarPorPrecio(rango: { min: number | null; max: number | null }): void {
    console.log('Rango de precios recibido:', rango);
    this.rangoPrecios = rango;
  }

  resetearVista(): void {
    console.log('Volviendo al listado completo de ofertas');
    this.mostrarFiltroPorPrecio = false; 
    this.searchQuery = ''; 
    this.rangoPrecios = { min: null, max: null }; 
  }
  
}
