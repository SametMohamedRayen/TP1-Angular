import { Component, OnInit } from '@angular/core';
import { CV } from '../Model/CV';
import {CvServiceService} from "../../services/cv-service.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvService : CvServiceService = new CvServiceService();
  cvs: CV[] = this.cvService.GetAll();

  /*cvs: CV[] = [
    new CV(
      1,
      'laabidi',
      'safa',
      23,
      12345678,
      'software engineering',
      'safa.png'
    ),
    new CV(2, 'samet', 'rayen', 21, 88774455, 'game dev', 'rayen.png'),
  ];*/

  selectedCV!: CV;

  selectCV(cv: CV){
    this.selectedCV = cv;
  }

  constructor() {}

  ngOnInit(): void {
    this.cvs = this.cvService.GetAll();
  }
}
