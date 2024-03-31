import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// App Component Imports
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: `Iowa's Best Wildflower Honey and Bees`,
      },
      {
        path: 'home',
        component: HomeComponent,
        title: `Iowa's Best Wildflower Honey and Bees`,
      },
      {
        path: 'shop',
        component: ShopComponent,
        title: `Iowa's Best Wildflower Honey and Bees`,
      },
    ],
  },
];
@NgModule({
  // imports the RouterModule and defines the routes array and other options (e.g. useHash, enableTracing, scrollPositionRestoration)
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
