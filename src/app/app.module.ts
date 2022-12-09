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
import { HeaderComponent } from './CVs/header/header.component';
import { SecondComponent } from './components/second/second.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { UserDetailComponent } from './CVs/user-detail/user-detail.component';
import { AuthComponent } from './CVs/auth/auth.component';
import { AddCvComponent } from './CVs/add-cv/add-cv.component';
import { ImageLoopComponent } from './components/image-loop/image-loop.component';

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
    HeaderComponent,
    SecondComponent,
    RouterSimulatorComponent,
    UserDetailComponent,
    AuthComponent,
    AddCvComponent,
    ImageLoopComponent,
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
