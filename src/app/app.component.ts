import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchBarComponent } from './top-bar/search-bar/search-bar.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookViewComponent } from './book-view/book-view.component';
import { SmallBookViewComponent } from './book/small-book-view/small-book-view.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { CheckoutConfirmComponent } from './cart/checkout/checkout-confirm/checkout-confirm.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthorComponent } from './about-us/author/author.component';
import { LoginComponent } from './top-bar/login/login.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    AppComponent,
    TopBarComponent,
    SearchBarComponent,
    AboutUsComponent,
    AuthorComponent,
    BookSearchComponent,
    SmallBookViewComponent,
    BookViewComponent,
    CheckoutComponent,
    CheckoutConfirmComponent,
    LoginComponent,
    PurchaseHistoryComponent
  ]
})
export class AppComponent {
}
