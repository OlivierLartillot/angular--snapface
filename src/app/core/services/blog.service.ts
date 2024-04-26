
import { Injectable } from "@angular/core";
import { Blog } from "../models/blog.model";

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  blogsArticles: Blog[] = [
    {
      id: 1,
      title: 'Archibald',
      textIntroduction: 'super article sur le popoté',
      article: 'Ce premier article parle de plein de choses intéressantes sur des popothés qui sont une race tres jolie...',
      createdDate: new Date,
      snaps: 5,
      imageUrl: 'https://cdn.pixabay.com/photo/2014/11/03/11/06/hippo-515027_1280.jpg',
      categorie: 'animaux',
    },
    {
      id: 2,
      title: 'Gontran',
      textIntroduction: 'super article sur le chachat',
      article: 'Ce deuxieme article parle de plein de choses intéressantes sur des chachats qui sont une race tres jolie...avec des yeux oranges !',
      createdDate: new Date,
      snaps: 10,
      imageUrl: 'https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg',
      categorie: 'animaux',
    },{
      id: 3,
      title: 'Paris',
      textIntroduction: 'super article sur Paris',
      article: 'Ce deuxieme article parle de plein de choses intéressantes Paris et la tour Eiffeil !',
      createdDate: new Date,
      snaps: 10,
      imageUrl: 'https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg',
      categorie: 'ville',
    },{
      id: 4,
      title: 'Paris',
      textIntroduction: 'super article sur Paris',
      article: 'Ce deuxieme article parle de plein de choses intéressantes Paris et la tour Eiffeil !',
      createdDate: new Date,
      snaps: 10,
      imageUrl: 'https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg',
      categorie: 'ville',
    },{
      id: 5,
      title: 'Paris',
      textIntroduction: 'super article sur Paris',
      article: 'Ce deuxieme article parle de plein de choses intéressantes Paris et la tour Eiffeil !',
      createdDate: new Date,
      snaps: 10,
      imageUrl: 'https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg',
      categorie: 'ville',
    },{
      id: 6,
      title: 'Paris',
      textIntroduction: 'super article sur Paris',
      article: 'Ce deuxieme article parle de plein de choses intéressantes Paris et la tour Eiffeil !',
      createdDate: new Date,
      snaps: 10,
      imageUrl: 'https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg',
      categorie: 'ville',
    },{
      id: 7,
      title: 'Paris',
      textIntroduction: 'super article sur Paris',
      article: 'Ce deuxieme article parle de plein de choses intéressantes Paris et la tour Eiffeil !',
      createdDate: new Date,
      snaps: 10,
      imageUrl: 'https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg',
      categorie: 'ville',
    },{
      id: 8,
      title: 'Paris',
      textIntroduction: 'super article sur Paris',
      article: 'Ce deuxieme article parle de plein de choses intéressantes Paris et la tour Eiffeil !',
      createdDate: new Date,
      snaps: 10,
      imageUrl: 'https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg',
      categorie: 'ville',
    }
  ];

  getAllArticles(): Blog[] {
    return this.blogsArticles;
  }

   getArticleById(articleId: number): Blog {
    const article = this.blogsArticles.find(article => article.id === articleId);
    if (!article) {
      throw new Error('FaceSnap Not Found');
    }
    return article;
  }
/*
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType == 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  } */


}
