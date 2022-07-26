import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerLayoutComponent } from './layout/dealer-layout/dealer-layout.component';
//import { HomeComponent } from './views/home/home.component';
//import { ListingDetailsComponent } from './views/listing-details/listing-details.component';
//import { ListingComponent } from './views/listing/listing.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DealerLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: '',
    component: DealerLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/catalogue/catalogue.module').then(m => m.CatalogueModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
