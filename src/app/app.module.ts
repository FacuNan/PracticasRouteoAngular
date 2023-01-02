import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/page/home/home.component';
import { LoginComponent } from './components/page/login/login.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { ContactosComponent } from './components/page/contactos/contactos.component';
import { DetallesContactoComponent } from './components/page/detalles-contacto/detalles-contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PipePipe } from './pipes/pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    ContactosComponent,
    DetallesContactoComponent,
    LoginFormComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
