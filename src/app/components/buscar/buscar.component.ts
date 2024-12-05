import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent {
  searchQuery: string = ''; 
  @Output() buscar: EventEmitter<string> = new EventEmitter<string>();

  onBuscar(): void {
    this.buscar.emit(this.searchQuery.trim()); 
  }
}
