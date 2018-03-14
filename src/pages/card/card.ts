import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})

// Array<{headUrl: string, name: string, createDate: string, imgUrl: string, detail: string, likes: string, comments: string, pastTime: string}>;
export class CardPage {
  public cardList: object[];
  public card: object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardList = [];
    this.card = {
      headUrl: '../../assets/imgs/logo.png',
      name: 'Marty McFly',
      createDate: 'November 5, 1955',
      imgUrl: '../../assets/imgs/logo.png',
      detail: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      likes: '12 Likes',
      comments: '4 Comments',
      pastTime: '12h ago'
    };
    for (let i = 0; i < 10; i++){
      this.cardList.push(this.card)
    }
  }

}
