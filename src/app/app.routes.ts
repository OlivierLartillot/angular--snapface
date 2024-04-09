import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { BlogComponent } from './blog/blog.component';
import { BlogArticlesComponent } from './blog-articles/blog-articles.component';

export const routes: Routes = [
  { path: '' ,component: LandingPageComponentComponent},
  { path: 'facesnaps' ,component: FaceSnapListComponent },
  { path: 'facesnaps/:id' ,component: SingleFaceSnapComponent},
  { path: 'blogs' ,component: BlogArticlesComponent},
];
