import { Component, Input, OnInit } from '@angular/core';
import { CV } from '../Model/CV';
import {EmbaucheServiceService} from "../../services/embauche-service.service";
import {ListEmbaucheComponent} from "../../components/list-embauche/list-embauche.component";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cv!: CV;

  constructor(private embaucheService:EmbaucheServiceService) { }

  ngOnInit(): void {
  }

  addEmbauche() {
    this.embaucheService.Embaucher(this.cv);
    console.log(this.embaucheService.GetAll())
  }
}
