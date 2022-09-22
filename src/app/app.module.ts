import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrandsComponent } from './brands/brands.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PressreleaseComponent } from './pressrelease/pressrelease.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DatabModule } from './datab/datab.module';
import { InterpolationBindingComponent } from './datab/interpolation-binding/interpolation-binding.component';
import { TeacherModule } from './teacher/teacher.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';

import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiComponent } from './news-api/news-api.component';
import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { TeamModule } from './team/team.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    BrandsComponent,
    OurteamComponent,
    PressreleaseComponent,
    ContactComponent,
    CareersComponent,
    FranchiseComponent,
    CarouselComponent,
    PagenotfoundComponent,
    ViewComponent,
    EditComponent,
    IfComponent,
    ForComponent,
    
    ChildComponent,
    PipeComponent,
    ApiComponent,
    NewsApiComponent,
    
    
  ],
  imports: [
    BrowserModule,
    DatabModule,
    TeacherModule,
    EmployeeModule,
    HttpClientModule,
    StudentModule,
    TeamModule,
    AppRoutingModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
