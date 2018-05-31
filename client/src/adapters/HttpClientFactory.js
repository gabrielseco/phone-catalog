// @flow strict
import { HttpClient } from './HttpClient';
import { BASE_URL } from 'config';

export const HttpClientFactory = () => new HttpClient(BASE_URL);
