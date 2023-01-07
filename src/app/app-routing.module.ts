import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/page/contactos/contactos.component';
import { DashboardComponent } from './components/page/dashboard/dashboard.component';
import { DetallesContactoComponent } from './components/page/detalles-contacto/detalles-contacto.component';
import { HomeComponent } from './components/page/home/home.component';
import { LoginComponent } from './components/page/login/login.component';
import { NotFoundComponent } from './components/page/not-found/not-found.component';
import { RandomContactComponent } from './components/page/random-contact/random-contact.component';
import { TaskListComponent } from './components/page/task-list/task-list.component';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { TaskComponent } from './components/task/task.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'


  },

 


  {
    path: 'login',
    component: LoginComponent
  },


 
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'contacts',
        component: ContactosComponent,
        canActivate: [AuthGuard]
    
      },
      {
        path: 'contacts/:id',
        component: DetallesContactoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'random',
        component: RandomContactComponent,
    
      },
      {
        path: 'user',
        component: RandomUserComponent
      },

      {
        path:'task',
        component: TaskListComponent
      }


    ]
 
  },
  

  {
    path: '**',
    component: NotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
