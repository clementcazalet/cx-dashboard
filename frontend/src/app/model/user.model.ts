import {GenericModel} from "./_generic.model";

export class User extends GenericModel {
  login?: string;
  firstName?: string;
  lastName ?: string;
  title ?: string;
}
