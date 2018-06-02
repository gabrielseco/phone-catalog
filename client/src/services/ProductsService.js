// @flow
import { HttpClient } from 'adapters/HttpClient';
import { BASE_URL } from 'config';
import { type AxiosPromise } from 'axios';
import { type Product } from './../types/product';

export class ProductsService {
  httpClient: HttpClient;
  constructor() {
    this.httpClient = new HttpClient(BASE_URL);
  }

  getProducts(): AxiosPromise<Product[]> {
    return this.httpClient.get('/phones');
  }
}
