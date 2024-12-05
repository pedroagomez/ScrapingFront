import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { OfertasService } from '../../service/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
})
export class OfertasComponent implements OnInit, OnChanges {
  @Input() searchQuery: string = ''; 
  @Input() rangoPrecios: { min: number | null; max: number | null } = { min: null, max: null }; // Rango de precios

  ofertas: any[] = []; 
  todasLasOfertas: any[] = []; 
  currentPage: number = 1; 

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.getOfertas(this.currentPage);
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rangoPrecios']) {
      const rango = changes['rangoPrecios'].currentValue;
      if (rango) {
        this.filtrarPorRango(rango.min, rango.max);
      }
    }
  }

  getOfertas(page: number): void {
    this.ofertasService.getOfertas(page).subscribe((data: any[]) => {
      this.todasLasOfertas = data.map((oferta) => ({
        ...oferta,
        precioAnterior: this.extraerPrecioAnterior(oferta.price),
        precioActual: this.extraerPrecioActual(oferta.price),
      }));
      this.ofertas = [...this.todasLasOfertas];
    });
  }

  cambiarPagina(page: number): void {
    if (page > 0) {
      this.currentPage = page;
      this.getOfertas(page);
    }
  }

  filtrarOfertas(query: string): void {
    this.ofertas = this.todasLasOfertas.filter((oferta) =>
      oferta.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  filtrarPorRango(min: number | null, max: number | null): void {
    this.ofertas = this.todasLasOfertas.filter((oferta) => {
      const precioActual = parseFloat(oferta.precioActual.replace(/[^\d.]/g, ''));
      if (min !== null && max !== null) {
        return precioActual >= min && precioActual <= max;
      } else if (min !== null) {
        return precioActual >= min;
      } else if (max !== null) {
        return precioActual <= max;
      }
      return true;
    });
  }

  private extraerPrecioAnterior(price: string): string | null {
    const match = price.match(/\$\d{1,3}(?:\.\d{3})+/g);
    return match && match[0] ? match[0] : null; 
  }

  private extraerPrecioActual(price: string): string {
    const match = price.match(/\$\d{1,3}(?:\.\d{3})+/g);
    return match && match[1] ? match[1] : 'No disponible'; 
  }
}
