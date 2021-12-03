import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VmService {
  backUrl= "/api/vm/"; 
  constructor(private http: HttpClient) { }

  getVms = ()=>{
    return this.http.get(this.backUrl).toPromise().then(res=>res).catch(err=>console.error());
  };

  SwitchState = (id:string)=>{
    return this.http.get(this.backUrl+"switch/"+id).toPromise().then(res=>res).catch(err=>console.error());
  };

  addVm =(vm :any)=>{
    return this.http.post(this.backUrl, vm).toPromise().then(res=>res).catch(err=>console.error());
    
  }

}
