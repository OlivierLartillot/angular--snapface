import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";




@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {

constructor (private http: HttpClient){}

  snaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'c est un super ami',
      createdDate: new Date,
      snaps: 5,
      imageUrl: 'https://cdn.pixabay.com/photo/2014/11/03/11/06/hippo-515027_1280.jpg',
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Gontran',
      description: 'c est un super Chat ! ',
      createdDate: new Date,
      snaps: 10,
      imageUrl: 'https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg'
    }
  ];

  getAllFaceSnaps(): Observable<FaceSnap[]>
  {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    //return this.snaps;
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap>
  {
    const faceSnap = this.http.get<FaceSnap>('http://localhost:3000/facesnaps/'+faceSnapId)
    //const faceSnap = this.snaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap Not Found');
    }
    return faceSnap;
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap>
  {
    /*
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType == 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    */
    return this.getFaceSnapById(faceSnapId).pipe(
      map(
        faceSnap => ({
          ...faceSnap,
          snaps: faceSnap.snaps + (snapType == 'snap' ? 1 : -1)
        })
      ),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
    )

  }

  addFaceSnap(formValues: {title: string, description: string, imageUrl: string, location?: string}):Observable<FaceSnap>
  {

    // récupérer la liste entière des faceSnaps
    return this.getAllFaceSnaps().pipe(
      map(faceSnaps => [...faceSnaps].sort((a,b) => a.id - b.id)),
      map(
        sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]
      ),
      map(
        lastFaceSnap => (
          {
            ...formValues,
            id: lastFaceSnap.id + 1,
            createdDate: new Date(),
            snaps: 0,
          }
        )
      ),
      switchMap(
        newFaceSnap => this.http.post<FaceSnap>(`http://localhost:3000/facesnaps`, newFaceSnap))
    )


    // il faut ajouter un facesnap valable aux données de l'application
    /*
      const newFaceSnap: FaceSnap = {
        ...formValues,
        createdDate: new Date(),
        id: this.snaps[this.snaps.length-1].id + 1,
        snaps: 0,
      }

      // l'ajouter au tableau
      this.snaps.push(newFaceSnap);
    */

  }



}
