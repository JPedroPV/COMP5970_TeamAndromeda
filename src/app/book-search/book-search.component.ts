import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book/book';
import { BooksService } from '../book/books.service';
import { Router, NavigationEnd } from '@angular/router';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { SmallBookViewComponent } from '../book/small-book-view/small-book-view.component';
import { MatDivider } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.css',
  standalone: true,
  imports: [
    MatGridTile,
    MatGridListModule,
    SmallBookViewComponent,
    CommonModule
  ]
})
export class BookSearchComponent {
  private searchParams: string;
  books: Book[];
  gridCols: number = 3; // Default number of columns

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService: BooksService,
    private breakpointObserver: BreakpointObserver // Inject BreakpointObserver
  ) {
    this.searchParams = '';
    this.books = this.booksService.getBooks();

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.recalcsearch();
      }
    });

    // Set up responsive grid columns
    this.breakpointObserver.observe([
      Breakpoints.XSmall, // For very small screens
      Breakpoints.Small,  // For small screens
      Breakpoints.Medium, // For medium screens
      Breakpoints.Large,  // For large screens
      Breakpoints.XLarge  // For extra-large screens
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.gridCols = 1; // 1 column for extra small screens
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.gridCols = 1; // 2 columns for small screens
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.gridCols = 2; // 3 columns for medium screens
      } else if (result.breakpoints[Breakpoints.Large]) {
        this.gridCols = 3; // 4 columns for large screens
      } else if (result.breakpoints[Breakpoints.XLarge]) {
        this.gridCols = 4; // 5 columns for extra-large screens
      }
    });
  }

  ngOnInit() {
    this.recalcsearch();
  }

  ngOnChanges() {
    this.recalcsearch();
  }

  private recalcsearch() {
    const routeParams = this.route.snapshot.paramMap;
    const searchInput = routeParams.get('searchInput');
    this.searchParams = (searchInput != null)?decodeURI(searchInput):'';
    this.books = this.booksService.getBooks();
    if(this.searchParams != ''){
      this.books = this.books.filter(book => {
        var splitParams = this.searchParams.split(' ');
        for(var i = 0; i < splitParams.length; i++){
          if(!book.title.toUpperCase().includes(splitParams[i].toUpperCase()))
            return false;
        }
        return true;
      });
    }
  }
}
