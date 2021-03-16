import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private fs: AngularFirestore ) { }

  //read
  readData() {
    return this.fs.collection('Dogs').snapshotChanges();
  }

  //delete
  delData(docId : any) {
    return this.fs.doc('Dogs/' + docId).delete();
  }

  //cerate
  createData(tmpdoc : any) {
    return this.fs.collection('Dogs').add(tmpdoc);
  }

  updateData(docId: any, tempdoc: any){
    return this.fs.doc('Dogs/' + docId).update(tempdoc);
  }
}
