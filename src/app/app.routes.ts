import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

export const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'search/:searchInput', component: BookSearchComponent },
  { path: 'book/:bookId', component: BookViewComponent },
  { path: 'cart', component: CheckoutComponent },
  { path: 'purchase-history', component: PurchaseHistoryComponent },
];
