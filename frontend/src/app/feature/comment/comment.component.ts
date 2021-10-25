import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Vote} from "../../model/vote.model";
import {VoteService} from "../../service/vote.service";
import {DatePipe} from "@angular/common";

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

  private COMMENT = 'Commentaire';
  private VOTE = 'Vote';
  private DATE = 'Date';
  private USER = 'Utilisateur';
  private TENANT = 'Tenant';

  dataSource: Vote[];
  columnsToDisplay: string[] = [this.COMMENT, this.VOTE, this.DATE, this.USER, this.TENANT];

  expandedElement?: Vote | null;

  constructor(private voteService: VoteService, private datePipe: DatePipe) {
    this.dataSource = this.voteService.votes;
  }

  ngOnInit(): void {
  }

  getValue = (vote: Vote, key: string): any => {
    switch (key) {
      case this.COMMENT: return vote.comment;
      case this.VOTE: return vote.star + '/5';
      case this.DATE: return this.datePipe.transform(vote.date, 'dd/MM/yyyy');
      case this.USER: return vote.user.firstName + ' ' + vote.user.lastName;
      case this.TENANT: return vote.tenant.name;
      default: throw new Error('Column key [' + key + '] not implemented');
    }
  }
}
