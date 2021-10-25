import { Component, OnInit } from '@angular/core';
import {VoteService} from "../../service/vote.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  values: any[];
  results: any[];

  constructor(private voteService: VoteService, private datePipe: DatePipe) {
    this.values = [];
    let count = 0;
    this.voteService.votes.sort((vote1, vote2) => {
      if(vote1.date && vote2.date && vote1.date < vote2.date) return -1;
      if(vote1.date && vote2.date && vote1.date > vote2.date) return 1;
      return 0;
    }).map(vote => {
      return {
        date: this.datePipe.transform(vote.date, 'dd/MM/yyyy'),
        star: vote.star
      }
    }).forEach(vote => {
      count++;
      if(this.values.length === 0) {
        this.values.push({
          name: vote.date,
          value: vote.star
        });
      }
      else {
        const lastValue = this.values[this.values.length - 1];
        const newVote = (lastValue.value * (count - 1) + (vote.star === undefined ? 0 : vote.star) ) / count;
        if(lastValue.name === vote.date) {
          this.values[this.values.length - 1] = {
            name: vote.date,
            value: newVote
          };
        }
        else {
          this.values.push({
            name: vote.date,
            value: newVote
          });
        }
      }
    });

    console.log(this.values);

    this.results = [{
      name: "Moyenne",
      series: this.values
    }];

  }

  ngOnInit(): void {
  }

}
