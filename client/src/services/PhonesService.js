// @flow
import { HttpClient } from 'adapters/HttpClient';
import { BASE_URL } from 'config';
import { type AxiosPromise } from 'axios';
import { type Phone } from './../types/phone';

export class PhonesService {
  httpClient: HttpClient;
  constructor() {
    this.httpClient = new HttpClient(BASE_URL);
  }

  getPhones(): AxiosPromise<Phone[]> {
    return this.httpClient.get('/phones');
  }
}
