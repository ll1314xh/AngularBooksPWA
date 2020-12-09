import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

const routes: Routes = [
  { path: '',
  loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  { path: 'home',
  loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  { path: 'search',
  loadChildren: () => import('./search/search.module').then(mod => mod.SearchModule),
   canActivate: [OktaAuthGuard]
},
  { path: 'details',
  loadChildren: () => import('./details/details.module').then(mod => mod.DetailsModule),
   canActivate: [OktaAuthGuard]
},
  { path: 'implicit/callback', component: OktaCallbackComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
