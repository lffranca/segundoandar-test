import { URL_API } from './../../constants/url';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

@Injectable()
export class SiteService {
  public url: string = URL_API + 'site/api/angular/test/';

  constructor(
    private http: Http
  ) {}

  getProducts() {
    return this.http.get(this.url, this.getHeader())
    .map(this.extract);
  }

  private extract(res: Response) {
    return res.json();
  }

  private getHeader(): RequestOptions {
    let reqOptions: RequestOptions = new RequestOptions;
    let headers: Headers = new Headers;

    headers.append('Authorization', 'Token 1aaa468de99390e432ed7d2542aabf43a03c46ca');

    reqOptions.headers = headers;

    return reqOptions;
  }
}
