import {Component, EventEmitter, Input, Output} from '@angular/core';
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
export class CardPage {
  @Input() nices: string
  public vovo: string = '帅的一P';
  @Output() onVoted = new EventEmitter<string>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  vote() {
    this.onVoted.emit(this.vovo)
  }

}
