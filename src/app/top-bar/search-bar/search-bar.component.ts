import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'], // Fix typo: styleUrl -> styleUrls
  standalone: true,
  imports: [
    FormsModule // Add FormsModule to imports
  ]
})
export class SearchBarComponent {
  searchParams: string = '';
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  performSearch() {
    this.searchEvent.emit(this.searchParams);
  }
}
