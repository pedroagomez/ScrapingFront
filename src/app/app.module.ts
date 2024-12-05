import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FormsModule } from '@angular/forms';
import { FiltrarPrecioComponent } from './components/filtrar-precio/filtrar-precio.component';

@NgModule({
  declarations: [
    AppComponent,
    OfertasComponent,
    BuscarComponent,
    FiltrarPrecioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
