import { Component, OnInit } from '@angular/core';
import {Vote} from "../../model/vote.model";
import {VoteService} from "../../service/vote.service";
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {UserComponent} from "../user/user.component";
import {CommentFilter} from "./filter/comment.filter.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  readonly COMMENT = 'Commentaire';
  readonly VOTE = 'Vote';
  readonly DATE = 'Date';
  readonly USER = 'Utilisateur';
  readonly TENANT = 'Tenant';

  readonly columnsToDisplay: string[] = [this.COMMENT, this.VOTE, this.DATE, this.USER, this.TENANT];

  static readonly YES = 'Oui';
  static readonly NO = 'Non';
  static readonly ALL = 'Tous';
  readonly YES_OR_NOT = [CommentComponent.ALL, CommentComponent.YES, CommentComponent.NO];

  activeFilters: CommentFilter;

  constructor(public voteService: VoteService, private datePipe: DatePipe, private matDialog: MatDialog) {
    this.activeFilters = {
      commentPresent: CommentComponent.ALL
    };
  }

  ngOnInit(): void {

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
