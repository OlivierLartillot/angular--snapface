import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
import { LandingPageComponentComponent } from './landing-page/components/landing-page-component/landing-page-component.component';
import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
import { BlogComponent } from './blogs/components/blog/blog.component';
import { BlogArticlesComponent } from './blogs/components/blog-articles/blog-articles.component';
import { SingleArticleComponent } from './blogs/components/single-article/single-article.component';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';

export const routes: Routes = [
  { path: '' ,component: LandingPageComponentComponent},
  { path: 'facesnaps' ,component: FaceSnapListComponent },
  { path: 'facesnaps/:id' ,component: SingleFaceSnapComponent},
  { path: 'blogs' ,component: BlogArticlesComponent},
  { path: 'blogs/:id' ,component: SingleArticleComponent},
  { path: 'create' ,component: NewFaceSnapComponent},
];
