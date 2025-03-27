import { Component, Input } from '@angular/core';
import { Book } from '../book';
import { BookType } from '../book-type';
import { CurrentUserService } from '../../current-user.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-small-book-view',
  templateUrl: './small-book-view.component.html',
  styleUrl: './small-book-view.component.css',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardContent,
    MatIcon,
    MatCardSubtitle,
    MatCardTitle,
    MatCard,
    MatCardHeader,
    RouterModule,
    CommonModule
  ]
})
export class SmallBookViewComponent {
  @Input() book!: Book;
  @Input() cartIndex: number = -1;

  constructor(private curUser: CurrentUserService) { }

  removeBook() {
    if (this.cartIndex !== -1) {
      this.curUser.user.cart.removeBookWithIndex(this.cartIndex);
    }
  }

  isInCart() {
    return this.cartIndex !== -1;
  }

  getIconText(): string {
    switch(this.book.type) {
      case BookType.PHYSICAL:
        return 'Physical';
      case BookType.EBOOK:
        return 'Ebook';
      case BookType.AUDIO:
        return 'Audiobook';
      default:
        return 'Unknown';
    }
  }
  }
