import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Vote} from "../../model/vote.model";
import {VoteService} from "../../service/vote.service";
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CommentComponent implements OnInit {

  public COMMENT = 'Commentaire';
  public VOTE = 'Vote';
  public DATE = 'Date';
  public USER = 'Utilisateur';
  public TENANT = 'Tenant';

  dataSource: Vote[];
  columnsToDisplay: string[] = [this.COMMENT, this.VOTE, this.DATE, this.USER, this.TENANT];

  expandedElement?: Vote | null;

  constructor(private voteService: VoteService, private datePipe: DatePipe, private matDialog: MatDialog) {
    this.dataSource = this.voteService.votes;
  }

  ngOnInit(): void {
    this.voteService.onLoad.subscribe(
      () => this.dataSource = this.voteService.votes,
      error => console.error(error)
    );
  }

  getValue = (vote: Vote, key: string): any => {
    switch (key) {
      case this.COMMENT: return vote.comment;
      case this.VOTE: return vote.star + '/5';
      case this.DATE: return this.datePipe.transform(vote.date, 'dd/MM/yyyy');
      case this.USER: return vote.user.login;
      case this.TENANT: return vote.tenant.name;
      default: throw new Error('Column key [' + key + '] not implemented');
    }
  }

  openUserInfo = (id: string) => {
    let config = {data: id};
    this.matDialog.open(UserComponent, config);
  }
}
