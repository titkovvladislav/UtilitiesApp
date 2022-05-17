import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor( private afs: AngularFirestore) {}

  getApartment(){
    this.afs.collection('utilities2/novocherkassk/stepnaya_71').valueChanges().subscribe(value => console.log('stepnaya_71-kol:',value))
    this.afs.doc('utilities2/novocherkassk/stepnaya_71/2022').valueChanges().subscribe(value => console.log('items2',value))
  }
}
