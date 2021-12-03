import { AjoutVmComponent } from './ajout-vm/ajout-vm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeVmComponent } from './liste-vm/liste-vm.component';

const routes: Routes = [
  { path: '', component: ListeVmComponent},
  { path: 'ajouter', component: AjoutVmComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
