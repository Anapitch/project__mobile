import { ApiService } from './../api.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.page.html',
  styleUrls: ['./add-data.page.scss'],
})
export class AddDataPage implements OnInit {

  name: String;
  price: Number;
  img: String;


  constructor(  public navCtrl: NavController, public actRoute: ActivatedRoute, private apiService: ApiService ) { }

  ngOnInit() {
  }

  async saveData() {
    let tmpobj = {
      name: this.name,
      price: this.price,
      image: this.img
    };
    this.apiService.createData(tmpobj).then( () => {
      this.navCtrl.navigateForward(['/species']).then( () => {
        location.reload();
      })
    })
  }

  back() {
    this.navCtrl.pop();
  }


}
