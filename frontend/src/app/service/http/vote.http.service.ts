import {GenericHttpService} from "./_generic.http.service";
import {Vote} from "../../model/vote.model";
import {Tenant} from "../../model/tenant.model";
import {User} from "../../model/user.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoteHttpService extends GenericHttpService<Vote> {

  //getAll = (): Vote[] => {
  //  return this.mockVotes();
  //}

  constructor(private httpClient: HttpClient) {
    super('/vote', httpClient);
  }

  private mockVotes = (): Vote[] => {
    let tenant = new Tenant();
    tenant.id = "1";
    tenant.name = "ACME";

    let tenant2 = new Tenant();
    tenant2.id = "2";
    tenant2.name = "ITESOFT";

    let user = new User();
    user.firstName = "John";
    user.lastName = "Smith";
    user.login = "j.smith";
    user.title = "Comptable";
    user.id = "1";

    let user2 = new User();
    user2.firstName = "Sophia";
    user2.lastName = "Wilson";
    user2.login = "s.wilson";
    user2.title = "Comptable";
    user2.id = "2";

    let vote1 = new Vote();
    vote1.id = "1";
    vote1.tenant = tenant;
    vote1.star = 4;
    vote1.comment = "";
    vote1.user = user;
    vote1.date = new Date(2021, 9, 26);

    let vote2 = new Vote();
    vote2.id = "2";
    vote2.tenant = tenant2;
    vote2.star = 1;
    vote2.comment = "Je ne comprends pas l'application, je ne retrouve pas mes documents";
    vote2.user = user2;
    vote2.date = new Date(2021, 9, 25);

    let vote3 = new Vote();
    vote3.id = "3";
    vote3.tenant = tenant;
    vote3.star = 5;
    vote3.comment = "C'est trop bien";
    vote3.user = user;
    vote3.date = new Date(2021, 9, 24);

    let vote4 = new Vote();
    vote4.id = "4";
    vote4.tenant = tenant;
    vote4.star = 5;
    vote4.comment = "";
    vote4.user = user;
    vote4.date = new Date(2021, 9, 26);

    return [vote1, vote2, vote3, vote4];
  }
}
