import {Pipe, PipeTransform} from "@angular/core";
import {Vote} from "../../../model/vote.model";
import {CommentFilter} from "./comment.filter.model";
import {CommentComponent} from "../comment.component";

@Pipe({
  name: 'commentFilter',
  pure: false
})
export class CommentFilterPipe implements PipeTransform {
  transform(votes: Vote[], activeFilter: CommentFilter): Vote[] {
    return votes
      .filter(vote => {
        if(activeFilter.commentPresent === CommentComponent.YES) {
          return vote.comment !== undefined && vote.comment !== null && vote.comment !== '';
        }
        else if(activeFilter.commentPresent === CommentComponent.NO) {
          return vote.comment === undefined || vote.comment === null || vote.comment === '';
        }
        return true;
      })
      .filter(vote => !activeFilter.starStart || activeFilter.starStart < 1 || vote.star && vote.star >= activeFilter.starStart)
      .filter(vote => !activeFilter.starEnd || activeFilter.starEnd < 1 || vote.star && vote.star <= activeFilter.starEnd)
      .filter(vote => !activeFilter.comment || vote.comment && vote.comment.toLowerCase().includes(activeFilter.comment.toLowerCase()))
      .filter(vote => !activeFilter.dateStart || vote.date && vote.date >= new Date(activeFilter.dateStart))
      .filter(vote => !activeFilter.dateEnd || vote.date && vote.date <= new Date(activeFilter.dateEnd))
      .filter(vote => !activeFilter.user || vote.user?.login && vote.user.login.toLowerCase().includes(activeFilter.user.toLowerCase()))
      .filter(vote => !activeFilter.tenant || vote.tenant?.name && vote.tenant.name.toLowerCase().includes(activeFilter.tenant.toLowerCase()));
  }
}
