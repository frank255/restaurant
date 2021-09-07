import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) }, { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) }, { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) }, { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
