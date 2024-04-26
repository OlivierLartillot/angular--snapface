import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../../../core/services/face-snap.service';
import { Observable, Subject, interval, map, take, takeUntil, tap } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, CommonModule, HttpClientModule],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  snaps!: FaceSnap[];
  snaps$!: Observable<FaceSnap[]>;

  //private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    // this.destroy$ = new Subject<boolean>();
    // this.snaps = this.faceSnapsService.getAllFaceSnaps();
    this.snaps$ = this.faceSnapsService.getAllFaceSnaps();


      /*
        interval(1000).pipe(
          // take(3) au bout de 3 émissions il n existe plus,
          // takeUntil(this.destroy$),
          tap(console.log) // equivalent de tap(value => console.log(value))
        ).subscribe();
      */


  }

  ngOnDestroy(): void {
    //this.destroy$.next(true);
  }


}
