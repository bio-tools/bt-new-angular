import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User, Resource } from '@bt/core/user/user.model';
import { UserService } from '@bt/core/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bt-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy   {
  private userSub: Subscription | null = null;
  authenticatedUser: User | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userSub = this.userService.user.subscribe({
      next: (user: User | null) => {
        this.authenticatedUser = user;
      }
    });
  }

  disownTool(biotoolsID: string){
    if (!confirm('Are you sure you want to disown this tool?')){
      return;
    }

    this.userService.disownTool(biotoolsID).subscribe({
      next: (_) => {
        if (this.authenticatedUser){
          const ownedTools: Resource[] = this.authenticatedUser.resources.filter(r => r.id.toLowerCase() !== biotoolsID.toLowerCase());
          this.userService.user.next({...this.authenticatedUser, resources: ownedTools});
          console.log(`Tool with ID: ${biotoolsID} disowned`);
        }
      },
      error: (e: HttpErrorResponse) => {
        console.error(e);
      }
    })

    
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

}
