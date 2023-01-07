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
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomContactComponent } from './components/page/random-contact/random-contact.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/page/dashboard/dashboard.component';
import { TaskComponent } from './components/task/task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskListComponent } from './components/page/task-list/task-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    ContactosComponent,
    DetallesContactoComponent,
    LoginFormComponent,
    PipePipe,
    RandomUserComponent,
    RandomContactComponent,
    NavComponent,
    DashboardComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
