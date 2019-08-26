import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { UserSigninComponent } from './pages/user-signin/user-signin.component';
import { UserSignupComponent } from './pages/user-signup/user-signup.component';
import { environment } from './../environments/environment';
import { AuthService } from './services/firestore/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { PlaceRegistComponent } from './pages/place/place-regist/place-regist.component';
import { PlaceListComponent } from './pages/place/place-list/place-list.component';
import { PlaceDetailComponent } from './pages/place/place-detail/place-detail.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SelectPrefecturesComponent } from './parts/select-prefectures/select-prefectures.component';
import { FilterComponent } from './parts/filter/filter.component';
import { PlaceComponent } from './pages/place/place.component';
import { SelectCategoryComponent } from './parts/select-category/select-category.component';
import { BusinessHoursComponent } from './parts/business-hours/business-hours.component';
import { WeatherNewsComponent } from './parts/weather-news/weather-news.component';
import { CategoryComponent } from './pages/setting/category/category.component';
import { UserGroupComponent } from './pages/setting/user-group/user-group.component';
import { SelectGroupComponent } from './parts/select-group/select-group.component';
import { UserGroupJoinComponent } from './pages/setting/user-group-join/user-group-join.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserSigninComponent,
    UserSignupComponent,
    UserInfoComponent,
    PlaceRegistComponent,
    PlaceListComponent,
    PlaceDetailComponent,
    SelectPrefecturesComponent,
    FilterComponent,
    PlaceComponent,
    SelectCategoryComponent,
    BusinessHoursComponent,
    WeatherNewsComponent,
    CategoryComponent,
    UserGroupComponent,
    SelectGroupComponent,
    UserGroupJoinComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
