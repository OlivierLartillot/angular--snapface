import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snap.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FaceSnap } from '../../models/face-snap.model';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{

  faceSnap!: FaceSnap;
  snapAdded! : boolean;
  textButtonSnap!: string;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.snapAdded = false;
    this.textButtonSnap = 'Ajouter un snap';
    // + cast le type de string (query) => int
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
;  }


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

}
