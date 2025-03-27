import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  standalone: true,
  imports: [
    AuthorComponent,
    RouterModule
  ]
})
export class AboutUsComponent {

}
