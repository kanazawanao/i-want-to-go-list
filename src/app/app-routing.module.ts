import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserSignupComponent } from './pages/user-signup/user-signup.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { AuthGuard } from './guard/auth.guard';
import { PlaceRegistComponent } from './pages/place-regist/place-regist.component';
import { PlaceComponent } from './pages/place/place.component';
import { SettingComponent } from './pages/setting/setting.component';
import { UserGroupComponent } from './pages/user-group/user-group.component';
import { UserGroupJoinComponent } from './pages/user-group-join/user-group-join.component';

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
    component: PlaceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'setting',
    component: SettingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'userGroup',
    component: UserGroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'userGroupJoin',
    component: UserGroupJoinComponent,
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
