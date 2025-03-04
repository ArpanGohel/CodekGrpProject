import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { PartialsModule } from './partials/components.module';
import { SurveyModule } from './survey/survey.module';
import { UserModule } from './user/user.module';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRepository } from './model/user.repository';

export function jwtTokenGetter(): string {
  return localStorage.getItem('id_token')!;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    PartialsModule,
    SurveyModule,
    UserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
      },
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserRepository],
  bootstrap: [AppComponent],
})
export class AppModule {}