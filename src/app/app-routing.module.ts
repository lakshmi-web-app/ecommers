import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './women/accessories/accessories.component';
import { WomenComponent } from './women/women.component';
import { WesternWearComponent } from './women/western-wear/western-wear.component';
import { SportsActiveWearComponent } from './women/sports-active-wear/sports-active-wear.component';
import { EthnicFusionWearComponent } from './women/ethnic-fusion-wear/ethnic-fusion-wear.component';
import { ManComponent } from './man/man.component';
import { HomeComponent } from './home/home.component';
import { MansEthicwearComponent } from './man/mans-ethicwear/mans-ethicwear.component';
import { ManWesternWearComponent } from './man/man-western-wear/man-western-wear.component';
import { MansSportsWearComponent } from './man/mans-sports-wear/mans-sports-wear.component';
import { ManAccessoriesComponent } from './man/man-accessories/man-accessories.component';
import { KidsComponent } from './kids/kids.component';
import { BoysComponent } from './kids/boys/boys.component';
import { GirlsComponent } from './kids/girls/girls.component';
import { InfantsComponent } from './kids/infants/infants.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ParentComponent } from './parent/parent.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
const routes: Routes = [
  /*{path:"women",component:BrandsInFocusComponent},
  {path:"man",component:ChooseYourSizeComponent},
{path:"kids",component:ShopByHuesComponent}
{path:"",redirectTo:"kids",pathMatch:"full"},
{path:"**",component:PageNotFoundComponent}
*/
{path:"home", component:HomeComponent},
{path:"women",component:WomenComponent,
children:[
  {path:"accessories",component:AccessoriesComponent},
  {path:"westernwear",component:WesternWearComponent},
  {path:'',redirectTo:"accessories",pathMatch:"full"},
  {path:"sportswear", component:SportsActiveWearComponent},
  {path:"ethicfushionwear", component:EthnicFusionWearComponent},
]
},
{path:"man", component:ManComponent,
children:[
  {path:"manethicwear",component:MansEthicwearComponent},
  {path:"manwessternwear",component:ManWesternWearComponent},
  {path:"mansportswear",component:MansSportsWearComponent},
  {path:"manaccessories",component:ManAccessoriesComponent}
]
},
{
  path:"kids",component:KidsComponent,
  children:[
    {path:"boys",component:BoysComponent},
    {path:"girls",component:GirlsComponent},
    {path:"infants",component:InfantsComponent}
  ]
},
{path:"signin", component:SigninComponent},
{path:"signup", component:SignupComponent},
{path: "parentToChild",component:ParentComponent},
{path:"trackorder", component:TrackorderComponent},
{path:'',redirectTo:"parentToChild",pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
