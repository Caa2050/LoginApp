import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { HomeComponent } from './Pages/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ConfigurationsComponent } from './Pages/configurations/configurations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    HomeComponent,
    MenuComponent,
    ConfigurationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
