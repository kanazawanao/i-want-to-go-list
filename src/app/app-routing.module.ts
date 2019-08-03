import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserSignupComponent } from './pages/user-signup/user-signup.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { AuthGuard } from './guard/auth.guard';
import { PlaceListComponent } from './pages/place-list/place-list.component';
import { PlaceRegistComponent } from './pages/place-regist/place-regist.component';
import { PlaceRandomComponent } from './pages/place-random/place-random.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/userinfo',
    pathMatch: 'full'
  },
  {
    path: 'userinfo',
    component: UserInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'placeRegist',
    component: PlaceRegistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'placeList',
    component: PlaceListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'placeRandom',
    component: PlaceRandomComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'signup',
    component: UserSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
