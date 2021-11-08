import {HttpClient} from "@angular/common/http";

export abstract class GenericHttpService<T> {

  protected path: string;

  private static DATA_REST_PATH = '/data';
  private static BACKEND_URL = '/back';

  protected constructor(endpoint: string, private client: HttpClient) {
    this.path = GenericHttpService.BACKEND_URL + GenericHttpService.DATA_REST_PATH + endpoint;
  }

  public getAll = () => {
    return this.client.get<T[]>(this.path);
  }

  public getById = (id: string) => {
    return this.client.get<T>(this.path + '/' + id);
  }

  public post = (entity: T) => {
    return this.client.post<T>(this.path, entity);
  }

  public remove = (entity: T) => {
    this.client.delete(this.path, entity);
  }

}
