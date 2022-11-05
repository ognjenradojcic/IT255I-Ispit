import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleSmartphoneComponent } from './components/single-smartphone/single-smartphone.component';
import { SmartphonesComponent } from './components/smartphones/smartphones.component';
import { HomeComponent } from './components/home/home.component';
import { EditPhoneComponent } from './components/edit-phone/edit-phone.component';
import { FormAddComponent } from './components/form-add/form-add.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'smartphones', component: SmartphonesComponent},
  {path: 'smartphones/:id', component: SingleSmartphoneComponent},
  {path: 'editphone/:id', component: EditPhoneComponent},
  {path: 'addPhone', component: FormAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
