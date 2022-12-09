import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent implements OnInit {

  constructor(private router:Router) { }
  path:string="cv";
  ngOnInit(): void {
  }
  onChangePath():void{
    console.log(this.path);
    this.router.navigate(["/"+this.path]);
  }

}
