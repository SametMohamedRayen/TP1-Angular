import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CV } from '../Model/CV';
import { CvServiceService } from '../../services/cv-service.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  newcv: CV = {
    id: 0,
    name: "",
    firstname: "",
    job: "",
    path: "",
    age:0,
    cin:11111111
  }
  constructor(private cvService: CvServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  addCv(form: NgForm) {
    this.newcv = form.value;
    this.cvService.addCv(this.newcv);
    console.log(this.cvService.cvs)
    this.router.navigate(['CV']);
  }
}
