import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../../models/face-snap.model';
import { CommonModule } from '@angular/common';
import { FaceSnapListComponent } from '../face-snap-list/face-snap-list.component';
import { FaceSnapsService } from '../services/face-snap.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule, FaceSnapListComponent],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapsService, private router:Router) {

  }

  /* Importé dans le modèle
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string; */
  snapAdded! : boolean;
  textButtonSnap!: string;

  ngOnInit(): void {
    /* this.title = "Archibald";
    this.description = "Mon ami";
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2014/11/03/11/06/hippo-515027_1280.jpg'; */
    this.snapAdded = false;
    this.textButtonSnap = 'Ajouter un snap';
  }


  onSnap() {
    if (!this.snapAdded) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');

      //this.faceSnap.snaps++;
      this.snapAdded = true;
      this.textButtonSnap = 'Tu as déja réagi';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');

      this.snapAdded = false;
      this.textButtonSnap = 'Ajouter un snap';
    }
  }

  onViewFaceSnap(): void{
    this.router.navigateByUrl('facesnaps/' + this.faceSnap.id )
  }


}
