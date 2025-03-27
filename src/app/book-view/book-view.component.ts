import { Component } from '@angular/core';
import { BooksService } from '../book/books.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CurrentUserService } from '../current-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.css',
  standalone: true,
  imports: [
    MatDivider,
    MatIcon,
    CommonModule
  ]
})
export class BookViewComponent {
  book: any | undefined;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService: BooksService,
    private curUser: CurrentUserService,
    private _snackBar: MatSnackBar,
  ) {
    this.recalcbook();

    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.recalcbook();
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.recalcbook();
      }
    });
  }

  ngOnChanges() {
    this.recalcbook();
  }

  private recalcbook() {
    this.book = this.booksService.getBooks().find(book => book.id.toString() === this.route.snapshot.paramMap.get('bookId'));
  }

  addToCart() {
    this.curUser.user.addToCart(this.book);
    this._snackBar.open(this.book.title + ' added to cart!', "Ok", {
      duration: 1500
    });
  }

  goBack() {
    window.history.back();
  }
}
