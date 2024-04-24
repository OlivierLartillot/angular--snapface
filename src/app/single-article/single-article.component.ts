import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-article.component.html',
  styleUrl: './single-article.component.scss'
})
export class SingleArticleComponent implements OnInit{

  article!: Blog;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {}


  ngOnInit(): void {

    const articleId = +this.route.snapshot.params['id'];
    this.article = this.blogService.getArticleById(articleId);
  }


}
