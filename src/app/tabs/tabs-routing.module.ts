import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: 'workouts',
        loadChildren: () => import('../pages/workouts/workouts.module').then(m => m.WorkoutsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('../pages/charts/charts.module').then(m => m.ChartsModule)
      },
      {
        path: '',
        redirectTo: '/app/workouts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/workouts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
