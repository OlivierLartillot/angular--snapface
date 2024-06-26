import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LandingPageComponentComponent } from './landing-page/components/landing-page-component/landing-page-component.component';

import { BlogArticlesComponent } from './blogs/components/blog-articles/blog-articles.component';
import { BlogComponent } from './blogs/components/blog/blog.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponentComponent,
    BlogComponent,
    BlogArticlesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {


  ngOnInit(): void {
    registerLocaleData(fr.default);

  }

}
