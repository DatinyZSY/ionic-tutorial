import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  items: string[]
  constructor(public alertCtrl: AlertController) {
    this.items = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build']
  }
  nice () {
    let alert = this.alertCtrl.create({
      title: '烟火里的尘埃',
      subTitle: '能不能慢下来',
      buttons: ['OK']
    })
    alert.present()
  }
}
