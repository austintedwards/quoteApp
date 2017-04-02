import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FavoritePage } from '../pages/favorite/favorite';
import { LibraryPage } from '../pages/library/library';
import { QuotePage } from '../pages/quote/quote';
import { QuotesPage } from '../pages/quotes/quotes';
import { SettingsPage } from '../pages/settings/settings';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    FavoritePage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritePage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
