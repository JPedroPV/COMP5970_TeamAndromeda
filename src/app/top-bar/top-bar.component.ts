import { Component, Inject, NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CurrentUserService } from '../current-user.service';
import { UserType } from '../user/user-type';
import { Member } from '../user/member';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  standalone: true,
  imports: [
    SearchBarComponent,
    RouterModule,
    CommonModule
  ]
})

export class TopBarComponent {

  constructor(
    @Inject(Router) private router: Router,
    public dialog: MatDialog,
    private curUser: CurrentUserService,
) {}

  sendToSearch(searchInput: string) {
    searchInput = encodeURI(searchInput.trim());
    this.router.navigate(['/search', searchInput]);
  }

  login() {
    this.dialog.open(LoginComponent, {
      disableClose: true,
    }).afterClosed().subscribe(result => {
      if(result) {
        this.curUser.loginMember();
      }
      else {
        this.curUser.loginGuest();
      }
      this.router.navigate(['/']);
    });
  }

  isMember(): boolean {
    return (this.curUser.user as Member).type == UserType.MEMBER;
  }
}
