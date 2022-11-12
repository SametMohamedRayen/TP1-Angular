import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CV } from '../Model/CV';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() cvs!: CV[];
  @Output() selectedCV = new EventEmitter();

  showCV(selected: any){
    this.selectedCV.emit(selected);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
