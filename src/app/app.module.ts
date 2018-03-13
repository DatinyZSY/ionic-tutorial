import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { CardPage } from '../pages/card/card';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{},{
      links: [
        {component: HelloIonicPage, name: 'Home', segment: 'home'},
        {component: ListPage, name: 'ListPage', segment: 'ListPage'},
        {component: ItemDetailsPage, name: 'ItemDetailsPage', segment: 'ItemDetailsPage/:item'},
        {component: CardPage, name: 'CardPage', segment: 'CardPage'}
      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
