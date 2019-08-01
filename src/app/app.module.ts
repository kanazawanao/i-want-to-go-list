import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserSignupComponent } from './pages/user-signup/user-signup.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './../environments/environment';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { PlaceRegistComponent } from './pages/place-regist/place-regist.component';
import { PlaceListComponent } from './pages/place-list/place-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserInfoComponent,
    PlaceRegistComponent,
    PlaceListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatButtonModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
