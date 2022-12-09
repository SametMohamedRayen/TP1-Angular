import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CV } from '../Model/CV';
import { CvServiceService } from '../../services/cv-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  cv: CV | undefined;

  constructor(private cvService: CvServiceService,
              private activatedRoute: ActivatedRoute,
              private router :Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.cv= this.cvService.getCvByID(params['id']);
    });
  }
  deleteCV():void{
    if(this.cv){
      this.cvService.deleteCv(this.cv);
      this.router.navigate(['CV'])
    }
  }
}
