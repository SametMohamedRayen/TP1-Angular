import { Injectable } from '@angular/core';
import {CV} from "../CVs/Model/CV";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheServiceService {
  cvsEmbauche : CV[] = [];
  //private toastr: ToastrService = new ToastrService();
  constructor() { }

  Embaucher(cv:CV){
    if(this.cvsEmbauche.includes(cv)){
      //this.toastr.error("Already Exists!")
    }else {
      this.cvsEmbauche.push(cv);
      //this.toastr.success("Embauche Successful!")
    }
  }

  GetAll(){
    return this.cvsEmbauche;
  }
}
