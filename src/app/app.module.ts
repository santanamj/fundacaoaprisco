import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpHeaders, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule  } from  '@angular/material/toolbar';
import { MatIconModule  } from  '@angular/material/icon';
import { MatSidenavModule  } from  '@angular/material/sidenav';
import { MatListModule  } from  '@angular/material/list';
import { MatButtonModule  } from  '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ArquivoListComponent } from './components/arquivos/arquivo-list/arquivo-list.component';
import { ArquivoCreateComponent } from './components/arquivos/arquivo-create/arquivo-create.component';
import { ArquivoEditComponent } from './components/arquivos/arquivo-edit/arquivo-edit.component';
import { ArquivoDeleteComponent } from './components/arquivos/arquivo-delete/arquivo-delete.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { ArquivosService } from './services/arquivos.service';
import { AuthGuard } from './guards/auth.guard';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { HomeComponent } from './components/home/home.component';
import { from } from 'rxjs';
import { AuthInterceptor } from './guards/authconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ArquivoListComponent,
    ArquivoCreateComponent,
    ArquivoEditComponent,
    ArquivoDeleteComponent,
    LoginComponent,
    RegistroUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule
],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    AuthService, ArquivosService, AuthGuard],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
