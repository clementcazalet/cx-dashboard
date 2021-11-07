import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {VoteService} from "../../service/vote.service";
import {User} from "../../model/user.model";
import {Vote} from "../../model/vote.model";
import {Tenant} from "../../model/tenant.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: User;
  public votes: Vote[];
  public tenant: Tenant;

  constructor(@Inject(MAT_DIALOG_DATA) private userId: string, private voteService: VoteService) {
    this.votes = this.voteService.votes.filter(vote => vote.user.id === this.userId).sort((vote1, vote2) => {
      if(vote1.date && vote2.date && vote1.date < vote2.date) return 1;
      if(vote1.date && vote2.date && vote1.date > vote2.date) return -1;
      return 0;
    });
    this.user = this.votes[0].user;
    this.tenant = this.votes[0].tenant;
  }

  ngOnInit(): void {
  }

}
