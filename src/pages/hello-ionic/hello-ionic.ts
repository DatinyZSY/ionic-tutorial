import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  nices: string;
  items: string[];
  vovo: string;
  constructor(public alertCtrl: AlertController) {
    this.items = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane', 'american-football', 'boat', 'bluetooth', 'build'];
    this.nices = '真的帅的一P'
  }
  nice () {
    let alert = this.alertCtrl.create({
      title: '烟火里的尘埃',
      subTitle: '能不能慢下来',
      buttons: ['OK']
    });
    alert.present()
  }

  Voted (vovo: string) {
    this.vovo = vovo
  }
}
