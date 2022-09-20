import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PressreleaseComponent } from './pressrelease/pressrelease.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'brands',
    component:BrandsComponent
  },
  {
    path:'careers',
    component:CareersComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'franchise',
    component:FranchiseComponent
  },
  {
    path:'ourteam',
    component:OurteamComponent
  },
  {
    path:'pressrelease',
    component:PressreleaseComponent
  },
  {
    path:"view/:id",
    component:ViewComponent
  },
  {
    path:"edit/:id",
    component:EditComponent

  },
  {
    path:"**",
    component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
