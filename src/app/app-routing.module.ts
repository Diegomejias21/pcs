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
    path: 'history',
    loadChildren: () => import('./features/history/history.module').then( m => m.HistoryPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'producto1',
    loadChildren: () => import('./pages/producto1/producto1.module').then( m => m.Producto1PageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'carro',
    loadChildren: () => import('./pages/carro/carro.module').then( m => m.CarroPageModule)
  },
  {
    path: 'producto2',
    loadChildren: () => import('./pages/producto2/producto2.module').then( m => m.Producto2PageModule)
  },
  {
    path: 'producto3',
    loadChildren: () => import('./pages/producto3/producto3.module').then( m => m.Producto3PageModule)
  },
  {
    path: 'producto4',
    loadChildren: () => import('./pages/producto4/producto4.module').then( m => m.Producto4PageModule)
  },
  {
    path: 'producto5',
    loadChildren: () => import('./pages/producto5/producto5.module').then( m => m.Producto5PageModule)
  },
  {
    path: 'producto6',
    loadChildren: () => import('./pages/producto6/producto6.module').then( m => m.Producto6PageModule)
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
