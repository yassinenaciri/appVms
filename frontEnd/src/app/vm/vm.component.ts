import { VmService } from './../vm.service';
import { Component, Input, OnInit } from '@angular/core';
import Vm from '../vmModel';

@Component({
  selector: 'app-vm',
  templateUrl: './vm.component.html',
  styleUrls: ['./vm.component.css']
})
export class VmComponent implements OnInit {
  @Input() vm: Vm ={
    _id:"",
    nom :"",
    ip :"",
    os:"",
    etat : false
  };
  constructor(private service:VmService) { }

  ngOnInit(): void {
  }

  switchState =()=>{
    this.service.SwitchState(this.vm._id).then((res:any)=>{
      this.vm=res;
    })
  }

}
