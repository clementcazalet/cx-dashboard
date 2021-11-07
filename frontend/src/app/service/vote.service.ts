import {Vote} from "../model/vote.model";
import {VoteHttpService} from "./http/vote.http.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  votes: Vote[];
  onLoad = new EventEmitter<void>();

  constructor(private voteHttpService: VoteHttpService) {
    this.votes = [];
    this.voteHttpService.getAll().subscribe(
      votes => {
        this.votes = votes;
        this.onLoad.emit();
      },
      error => console.error(error)
    );
  }

}
