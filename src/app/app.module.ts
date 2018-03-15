import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { CardPage } from '../pages/card/card';
import { ComponentsCard } from '../components/card/card';
import { DateTimePage } from '../pages/date-time/date-time';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CardPage,
    ComponentsCard,
    DateTimePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
    {
      backButtonText: "返回",
      monthShortNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    {
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
    CardPage,
    DateTimePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
