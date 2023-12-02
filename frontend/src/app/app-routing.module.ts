// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'localizacao', component: LocalizacaoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
