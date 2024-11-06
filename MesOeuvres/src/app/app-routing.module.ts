import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OeuvresComponent } from './oeuvres/oeuvres.component';
import { AddOeuvreComponent } from './add-oeuvre/add-oeuvre.component';
import { UpdateOeuvreComponent } from './update-oeuvre/update-oeuvre.component';
import { RechercheParExpositionComponent } from './recherche-par-exposition/recherche-par-exposition.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { ListeExpositionsComponent } from './liste-expositions/liste-expositions.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { OeuvreGuard } from './oeuvre.guard';

const routes: Routes = [
  {
    path: 'add-oeuvre',
    component: AddOeuvreComponent,
    canActivate: [OeuvreGuard],
  },
  { path: 'oeuvres', component: OeuvresComponent },
  { path: 'updateOeuvre/:id', component: UpdateOeuvreComponent },
  {
    path: 'rechercheParExposition',
    component: RechercheParExpositionComponent,
  },
  { path: 'rechercheParTitre', component: RechercheParTitreComponent },
  { path: 'listeExpositions', component: ListeExpositionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'oeuvres', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [OeuvreGuard],
})
export class AppRoutingModule {}
