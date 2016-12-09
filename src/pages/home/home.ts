import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public usuario;

  constructor(public navCtrl: NavController, public params: NavParams) {
      this.usuario={};
  }

  cadastrar(){
    this.navCtrl.push(CadastroPage);
  }

}
