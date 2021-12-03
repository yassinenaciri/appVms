import { VmService } from './vm.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VmComponent } from './vm/vm.component';
import { ListeVmComponent } from './liste-vm/liste-vm.component';
import { AjoutVmComponent } from './ajout-vm/ajout-vm.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VmComponent,
    ListeVmComponent,
    AjoutVmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [VmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
