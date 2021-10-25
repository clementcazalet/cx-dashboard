import {GenericModel} from "./_generic.model";
import {Tenant} from "./tenant.model";
import {User} from "./user.model";

export class Vote extends GenericModel {
  tenant: Tenant;
  star?: number;
  comment?: string;
  date?: Date;
  user: User;

  constructor() {
    super();
    this.tenant = new Tenant();
    this.user = new User();
  }
}
