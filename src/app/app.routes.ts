
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'myservices', component: MyServicesComponent },
  { path: '**', redirectTo: '' }
];
