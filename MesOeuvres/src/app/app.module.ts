import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OeuvresComponent } from './oeuvres/oeuvres.component';
import { AddOeuvreComponent } from './add-oeuvre/add-oeuvre.component';
import { UpdateOeuvreComponent } from './update-oeuvre/update-oeuvre.component';
import { HttpClientModule , provideHttpClient, withFetch,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParExpositionComponent } from './recherche-par-exposition/recherche-par-exposition.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeExpositionsComponent } from './liste-expositions/liste-expositions.component';
import { UpdateExpositionComponent } from './update-exposition/update-exposition.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { OeuvreGuard } from './oeuvre.guard';
import { TokenInterceptor} from './services/token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    OeuvresComponent,
    AddOeuvreComponent,
    UpdateOeuvreComponent,
    RechercheParExpositionComponent,
    RechercheParTitreComponent,
    SearchFilterPipe,
    ListeExpositionsComponent,
    UpdateExpositionComponent,
    LoginComponent,
    ForbiddenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  exports: [SearchFilterPipe],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
