import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { UserInfoComponent } from './pages/user/user-info/user-info.component';
import { UserSigninComponent } from './pages/user/user-signin/user-signin.component';
import { UserSignupComponent } from './pages/user/user-signup/user-signup.component';
import { environment } from './../environments/environment';
import { AuthService } from './services/firestore/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { WeatherNewsComponent } from './parts/weather-news/weather-news.component';
import { FileUploadComponent } from './parts/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserSigninComponent,
    UserSignupComponent,
    UserInfoComponent,
    WeatherNewsComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
