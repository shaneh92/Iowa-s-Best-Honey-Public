import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// App Component Imports
import { BaselayoutComponent } from './layouts/baselayout/baselayout.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/admin/users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: BaselayoutComponent,
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
      {
        path: 'admin',
        component: AdminComponent,
        title: `Admin Portal`,
      },
      {
        path: 'admin/users',
        component: UsersComponent,
        title: `Admin Portal: Users`,
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
