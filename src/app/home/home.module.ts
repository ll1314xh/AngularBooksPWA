import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { OktaAuthModule } from '@okta/okta-angular';
// routes
export const ROUTES: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    OktaAuthModule.initAuth({
        issuer: 'https://dev-4985802.okta.com/oauth2/default',
        redirectUri: 'http://localhost:8080/implicit/callback',
        clientId: '0oa1i4elrnL7u9cS95d6'
      }),
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
