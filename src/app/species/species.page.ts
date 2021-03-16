import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.page.html',
  styleUrls: ['./species.page.scss'],
})
export class SpeciesPage implements OnInit {

  tmpobj: any;

  constructor( public navCtrl: NavController, public actRoute: ActivatedRoute, private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.readData().subscribe(data => {
      this.tmpobj = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'.toString()],
          image: e.payload.doc.data()['image'.toString()],
          price: e.payload.doc.data()['price'.toString()],
        }
      })
      console.log(this.tmpobj);
    })

  }
  backhome() {
    this.navCtrl.navigateForward('/home');
  }

  editData(item: any) {
    this.navCtrl.navigateForward(['/edit-data',JSON.stringify(item)]);
  }

  deleteData(item: any) {

    this.apiService.delData(item.id);
  }

  addData() {
    this.navCtrl.navigateForward('/add-data')
  }
}
