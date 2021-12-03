import { VmService } from './../vm.service';
import { Component, Input, OnInit } from '@angular/core';
import Vm from '../vmModel';

@Component({
  selector: 'app-ajout-vm',
  templateUrl: './ajout-vm.component.html',
  styleUrls: ['./ajout-vm.component.css']
})
export class AjoutVmComponent implements OnInit {
  nom="";
  ip="";
  os="";
  constructor(private service :VmService) { }

  ngOnInit(): void {
    
  }
  valider=()=>{
    this.service.addVm({
      nom:this.nom,
      ip:this.ip,
      os:this.os,
      etat : false,
    })
    console.log(this.ip);
  }

  

}
