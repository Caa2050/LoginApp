import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import {SignupComponent} from './Pages/signup/signup.component';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { HomeComponent } from './Pages/home/home.component';
import { ConfigurationsComponent } from './Pages/configurations/configurations.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'signup', component: SignupComponent },
  { path:'forgot-password', component: ForgotPasswordComponent },
  { path:'home',component:HomeComponent},
  { path:'config',component:ConfigurationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
