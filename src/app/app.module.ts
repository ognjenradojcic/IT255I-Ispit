import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SmartphonesComponent } from './components/smartphones/smartphones.component';
import { SingleSmartphoneComponent } from './components/single-smartphone/single-smartphone.component';
import { HomeComponent } from './components/home/home.component';
import { FormAddComponent } from './components/form-add/form-add.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPhoneComponent } from './components/edit-phone/edit-phone.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterPipe } from './helpers/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SmartphonesComponent,
    SingleSmartphoneComponent,
    HomeComponent,
    FormAddComponent,
    EditPhoneComponent,
    NavbarComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
