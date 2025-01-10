import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[ guestGuard]
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule),
    canActivate:[guestGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'pag',
    loadChildren: () => import('./pages/pag/pag.module').then( m => m.PagPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'olvido',
    loadChildren: () => import('./pages/olvido/olvido.module').then( m => m.OlvidoPageModule),
    canActivate: [guestGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [guestGuard]
  },
  {
    path: 'registrar',
    loadChildren: () => import('./features/auth/registrar/registrar.module').then( m => m.RegistrarPageModule),
    canActivate: [guestGuard]
  },
  {
    path: 'olvido',
    loadChildren: () => import('./features/auth/olvido/olvido.module').then( m => m.OlvidoPageModule),
   canActivate: [guestGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./features/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [guestGuard]
  },
  {
    path: 'history',
    loadChildren: () => import('./features/history/history.module').then( m => m.HistoryPageModule),
    canActivate: [authGuard]
  },
  {
    path: '**',
   redirectTo: 'inicio'
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
