import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSigninComponent } from './pages/user-signin/user-signin.component';
import { UserSignupComponent } from './pages/user-signup/user-signup.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { AuthGuard } from './guard/auth.guard';
import { PlaceRegistComponent } from './pages/place/place-regist/place-regist.component';
import { PlaceComponent } from './pages/place/place.component';
import { CategoryComponent } from './pages/setting/category/category.component';
import { UserGroupComponent } from './pages/setting/user-group/user-group.component';
import { UserGroupJoinComponent } from './pages/setting/user-group-join/user-group-join.component';

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
    path: 'category',
    component: CategoryComponent,
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
    component: UserSigninComponent
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
