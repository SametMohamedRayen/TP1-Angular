import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-loop',
  templateUrl: './image-loop.component.html',
  styleUrls: ['./image-loop.component.css']
})
export class ImageLoopComponent implements OnInit {

  images = ['rayen.png', 'safa.png', 'default.png'];

  myObservable:Observable<string> | undefined;
  image: string | undefined;
  constructor() {}

  ngOnInit(): void {
    this.image = this.images[0]
    this.myObservable =new Observable((observer)=>{
      let i = this.images.length-1;
      setInterval(()=>{
        observer.next(this.images[i]);
        if(i>0){
          i--;
        }
        else{
          i = this.images.length-1;
        }
      },1000)
    });
    this.myObservable.subscribe((result)=>{
      this.image=result;
    });
  }

}
