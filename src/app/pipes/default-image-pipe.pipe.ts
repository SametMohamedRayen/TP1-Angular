import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImagePipe'
})
export class DefaultImagePipePipe implements PipeTransform {

  transform(path: string): string {
    if(path.trim() === ""){
      return "default.png"
    }
    return path;
  }
}
