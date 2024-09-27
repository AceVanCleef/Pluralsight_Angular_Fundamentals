import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';
import { SignInComponent } from './user/sign-in/sign-in.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Joe's robot shop" },
  { path: 'catalog', component: CatalogComponent, title: "Catalog - Joe's robot shop" },
  { path: 'cart', component: CartComponent, title: "Cart - Joe's robot shop" },
  { path: 'sign-in', component: SignInComponent },
  { path: 'form-controls', component: TemplateFormControlsComponent, title: "Form Controls - Joe's robot shop" },
  // redirect route
  { path: '', redirectTo: '/home', pathMatch: 'full' },   // redirects to home if url is empty.
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
