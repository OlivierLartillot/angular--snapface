import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapsService } from '../../../core/services/face-snap.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{

  //faceSnap!: FaceSnap;
  faceSnap$! : Observable<FaceSnap>;
  snapAdded! : boolean;
  textButtonSnap!: string;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.snapAdded = false;
    this.textButtonSnap = 'Ajouter un snap';
    // + cast le type de string (query) => int
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
;  }


  onSnap(faceSnapId: number) {
      // avec le http on n a plus acces a this.faceSnap.id
      // on va donc passer faceSnapId en paramètre de la méthode et récupérer l'argument depuis le template !!!
      if (!this.snapAdded) {
        this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
          tap(()=>{
            //this.faceSnap.snaps++;
            this.snapAdded = true;
            this.textButtonSnap = 'Supprimer mon snap';
            }
          )
        );

      } else {
        this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
          tap(
            () => {
              this.snapAdded = false;
              this.textButtonSnap = 'Ajouter un snap';
            }
          )
        )

      }



  }

}
