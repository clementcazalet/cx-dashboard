import {Vote} from "../model/vote.model";
import {VoteHttpService} from "./http/vote.http.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  votes: Vote[];

  constructor(private voteHttpService: VoteHttpService) {
    this.votes = this.voteHttpService.getAll();
  }

}
