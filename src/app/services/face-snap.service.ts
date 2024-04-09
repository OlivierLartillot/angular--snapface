
import { Injectable } from "@angular/core";
import { FaceSnap } from "../../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {

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

  getAllFaceSnaps():FaceSnap[] {
    return this.snaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.snaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap Not Found');
    }
    return faceSnap;
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType == 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }


}
