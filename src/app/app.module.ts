import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadderComponent } from './headder/headder.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EthnicFusionWearComponent } from './women/ethnic-fusion-wear/ethnic-fusion-wear.component';
import { WesternWearComponent } from './women/western-wear/western-wear.component';
import { SportsActiveWearComponent } from './women/sports-active-wear/sports-active-wear.component';
import { SleepWearComponent } from './women/sleep-wear/sleep-wear.component';
import { AccessoriesComponent } from './women/accessories/accessories.component';
import { WomenComponent } from './women/women.component';
import { ManComponent } from './man/man.component';
import { ManAccessoriesComponent } from './man/man-accessories/man-accessories.component';
import { MansEthicwearComponent } from './man/mans-ethicwear/mans-ethicwear.component';
import { HomeComponent } from './home/home.component';

import { TextServicesService } from './services/text-services.service';
import{ HttpClientModule } from '@angular/common/http';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ProductInfoComponent } from './helper/product-info/product-info.component';
import { ProductServices } from './services/product.services';
import { MansEthicwearService } from './services/mans.ethicwear.service';
import { ManWesternWearComponent } from './man/man-western-wear/man-western-wear.component';
import { MansSportsWearComponent } from './man/mans-sports-wear/mans-sports-wear.component';
import { GirlsComponent } from './kids/girls/girls.component';
import { BoysComponent } from './kids/boys/boys.component';
import { InfantsComponent } from './kids/infants/infants.component';
import { KidsComponent } from './kids/kids.component';
import { WomenWesternwear } from './services/womens/women.westernwear.service';
import { WomenAccessories } from './services/womens/women.accessories.service';
import { WomenSportswearService } from './services/womens/women.sportswear.service';
import { MansWesternwearService } from './services/mans/mans.westernwear.service';
import { ManSportswearService } from './services/mans/man.sportswear.service';
import { ManAccessoriesService } from './services/mans/man.accessories.service';
import { KidsGirlsService } from './services/mans/kids/kids.girls.service';
import { KidsInfantsService } from './services/mans/kids/kids-infants.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { KidsBoysService } from './services/mans/kids/kids-boys.service';
import { ViewComponent } from './view/view.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    FooterComponent,
    PageNotFoundComponent,
    EthnicFusionWearComponent,
    WesternWearComponent,
    SportsActiveWearComponent,
    SleepWearComponent,
    AccessoriesComponent,
    WomenComponent,
    ManComponent,
    ManAccessoriesComponent,
    MansEthicwearComponent,
    HomeComponent,
    LeftNavComponent,
    ProductInfoComponent,
    ManWesternWearComponent,
    MansSportsWearComponent,
    GirlsComponent,
    BoysComponent,
    InfantsComponent,
    KidsComponent,
    SigninComponent,
    SignupComponent,
    ViewComponent,
    ParentComponent,
    ChildComponent,
    TrackorderComponent,
    ViewProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TextServicesService,ProductServices,MansEthicwearService,WomenWesternwear,
    WomenAccessories,WomenSportswearService,MansWesternwearService,ManSportswearService,
    ManAccessoriesService,KidsGirlsService,KidsInfantsService,KidsBoysService
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
