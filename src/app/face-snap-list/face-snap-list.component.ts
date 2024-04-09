import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../models/face-snap.model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, CommonModule],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  snaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.snaps = this.faceSnapsService.getAllFaceSnaps();
  }


}
