import { Component, Input, OnInit } from '@angular/core';
import { CV } from '../Model/CV';
import {EmbaucheServiceService} from "../../services/embauche-service.service";
import {ListEmbaucheComponent} from "../../components/list-embauche/list-embauche.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cv!: CV;

  constructor(private embaucheService:EmbaucheServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  addEmbauche() {
    this.embaucheService.Embaucher(this.cv);
    console.log(this.embaucheService.GetAll())
  }
  details():void{
    this.router.navigate(["CV/"+this.cv?.id]);
  }
}
