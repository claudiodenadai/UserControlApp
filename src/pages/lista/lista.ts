import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Lista page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ListaPage Page');
  }

}
