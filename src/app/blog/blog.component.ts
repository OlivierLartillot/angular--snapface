import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';
import { CommonModule } from '@angular/common';
import { BlogArticlesComponent } from '../blog-articles/blog-articles.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, BlogArticlesComponent ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  @Input() blogObject!: Blog;

  constructor(private router: Router) {}


  onLinkViewArticle () {
    this.router.navigateByUrl(`/blogs/${this.blogObject.id}`)
  }

}
