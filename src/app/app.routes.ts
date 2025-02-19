import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'listing/:id', component: ListingDetailsComponent },
  //{ path: 'experiences', component: ExperiencesComponent},
  { path: 'login', component: LoginComponent }
];
