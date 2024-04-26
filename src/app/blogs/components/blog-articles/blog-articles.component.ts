import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../core/models/blog.model';
import { BlogService } from '../../../core/services/blog.service';
import { BlogComponent } from '../blog/blog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-articles',
  standalone: true,
  imports: [BlogComponent, CommonModule],
  templateUrl: './blog-articles.component.html',
  styleUrl: './blog-articles.component.scss'
})
export class BlogArticlesComponent implements OnInit {

  blogArticles!: Blog[];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {

    this.blogArticles = this.blogService.getAllArticles();


  }

}
