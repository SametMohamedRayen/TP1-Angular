import { Injectable } from '@angular/core';
import {CV} from "../CVs/Model/CV";

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
  cvs: CV[] = [
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
    new CV(3, 'user', 'new', 21, 88774455, 'web dev', ''),
  ];

  constructor() { }

  GetAll(){
    return this.cvs;
  }
}
