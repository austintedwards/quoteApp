import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import { FavoritePage } from '../favorite/favorite';
import { LibraryPage } from '../library/library';
import { QuotePage } from '../quote/quote';
import { QuotesPage } from '../quotes/quotes';
import { SettingsPage } from '../settings/settings';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

favoritePage = FavoritePage;
libraryPage = LibraryPage;


}
