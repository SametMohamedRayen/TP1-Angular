import { Component, OnInit } from '@angular/core';
import {EmbaucheServiceService} from "../../services/embauche-service.service";
import {CV} from "../../CVs/Model/CV";

@Component({
  selector: 'app-list-embauche',
  templateUrl: './list-embauche.component.html',
  styleUrls: ['./list-embauche.component.css']
})
export class ListEmbaucheComponent implements OnInit {
  listEmbauche : CV[] = [];

  constructor(private embaucheService: EmbaucheServiceService) { }

  ngOnInit(): void {
    this.listEmbauche = this.embaucheService.GetAll();
  }

}
