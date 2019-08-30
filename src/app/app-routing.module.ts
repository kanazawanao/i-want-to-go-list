import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSigninComponent } from './pages/user/user-signin/user-signin.component';
import { UserSignupComponent } from './pages/user/user-signup/user-signup.component';
import { UserInfoComponent } from './pages/user/user-info/user-info.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/userInfo',
    pathMatch: 'full'
  },
  {
    path: 'userInfo',
    component: UserInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signIn',
    component: UserSigninComponent
  },
  {
    path: 'signUp',
    component: UserSignupComponent
  },
  {
    path: 'place',
    loadChildren: () => import('./pages/place/place.module').then(m => m.PlaceModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
