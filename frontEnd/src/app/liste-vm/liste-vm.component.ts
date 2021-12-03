import { VmService } from './../vm.service';
import { Component, OnInit } from '@angular/core';
import Vm from '../vmModel';

@Component({
  selector: 'app-liste-vm',
  templateUrl: './liste-vm.component.html',
  styleUrls: ['./liste-vm.component.css']
})
export class ListeVmComponent implements OnInit {
  listeVms =[{
  _id:"",
  nom:"",
  ip:"",
  os:"",
  etat :false,
  }]
  constructor(private service :VmService) { }

  ngOnInit(): void {
    this.service.getVms().then((res:any)=>{
      this.listeVms = res
    })
    
  }

}
