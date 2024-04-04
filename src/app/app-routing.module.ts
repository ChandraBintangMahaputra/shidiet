import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MainLayoutComponent } from './template/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      {
        path: '', component: HomeComponent
        
      },
      {
        path: 'about', component: AboutComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
