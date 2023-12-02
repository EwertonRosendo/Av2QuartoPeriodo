import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { SobreComponent } from './sobre/sobre.component';
import { CamelCasePipe } from './camel-case.pipe';
import { LowerPipe } from './lower.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalizacaoComponent,
    SobreComponent,
    CamelCasePipe,
    LowerPipe,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
