import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { SobreComponent } from './sobre/sobre.component';
import { CamelCasePipe } from './camel-case.pipe';
import { LowerPipe } from './lower.pipe';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalizacaoComponent,
    SobreComponent,
    CamelCasePipe,
    LowerPipe,
    LoginComponent,
    CadastroComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[]
})
export class AppModule { }
