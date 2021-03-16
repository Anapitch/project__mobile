import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.page.html',
  styleUrls: ['./edit-data.page.scss'],
})
export class EditDataPage implements OnInit {

  name: String;
  price: Number;
  img: String;

  tmpobj: any;

  constructor( public navCtrl: NavController, public actRoute: ActivatedRoute, private apiService: ApiService ) {
    let sendobj = this.actRoute.snapshot.paramMap.get('sendedit');
    this.tmpobj = JSON.parse(sendobj);

    this.name = this.tmpobj.name;
    this.price = this.tmpobj.price;
    this.img = this.tmpobj.image;

  }

  ngOnInit() {
  }

  async saveData() {

    let tmpobj = {
      name: this.name,
      price: this.price,
      image: this.img
    };
    this.apiService.updateData(this.tmpobj.id, tmpobj);
    this.navCtrl.pop();
  }

  back() {
    this.navCtrl.pop();
  }

}
