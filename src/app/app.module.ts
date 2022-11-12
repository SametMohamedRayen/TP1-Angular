import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { CarteVisiteComponent } from './components/carte-visite/carte-visite.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './CVs/cv/cv.component';
import { ListComponent } from './CVs/list/list.component';
import { ItemComponent } from './CVs/item/item.component';
import { DetailComponent } from './CVs/detail/detail.component';
import { DefaultCvHiddenDirective } from './directives/default-cv-hidden.directive';
import { DefaultImagePipePipe } from './pipes/default-image-pipe.pipe';
import { ListEmbaucheComponent } from './components/list-embauche/list-embauche.component';
import {CvServiceService} from "./services/cv-service.service";
import {EmbaucheServiceService} from "./services/embauche-service.service";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CarteVisiteComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    DefaultCvHiddenDirective,
    DefaultImagePipePipe,
    ListEmbaucheComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [CvServiceService,EmbaucheServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
