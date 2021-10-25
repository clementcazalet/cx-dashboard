import {GenericModel} from "./_generic.model";
import {Version} from "./version.model";

export class Tenant extends GenericModel {
  name?: string;
  versions: Version[];

  constructor() {
    super();
    this.versions = [];
  }
}
