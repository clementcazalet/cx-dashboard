import { Component, OnInit } from '@angular/core';
import {VoteService} from "../../service/vote.service";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  public globalAverage?: number;
  public tenantAverage?: number;
  public tenant: string;
  public tenants: string[];
  public tenantVotesNumber?: number;

  constructor(public voteService: VoteService) {
    this.tenants = ["ACME", "ITESOFT", "SECURITAS", "LIDL"];
    this.tenant = this.tenants[0];
  }

  ngOnInit(): void {
    this.voteService.onLoad.subscribe(
      () => {
        this.calculateGlobalAverage();
        this.calculateTenantAverage();
      },
      error => console.error(error)
    );

    if(this.voteService.votes.length > 0) {
      this.calculateGlobalAverage();
      this.calculateTenantAverage();
    }
  }

  calculateGlobalAverage = () => {
    this.globalAverage = this.calculateAverage();
  }

  calculateTenantAverage = () => {
    this.tenantAverage = this.calculateAverage(this.tenant);
    this.tenantVotesNumber = this.voteService.votes.filter(vote => vote.tenant.name === this.tenant).length;
  }

  private calculateAverage = (tenantFilter?: string) => {
    // @ts-ignore
    let filteredStars: number[] = this.voteService.votes
      .filter(vote => !tenantFilter || vote.tenant.name === tenantFilter)
      .map(vote => vote.star)
      .filter(star => star !== undefined && star !== null);
    return Math.round(filteredStars.reduce((a, b) => a + b, 0) / filteredStars.length * 100) / 100;
  }

}
