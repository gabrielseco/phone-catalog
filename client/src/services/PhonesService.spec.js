// @flow
import { PhonesService } from './PhonesService';

describe('PhonesService', () => {
  const phoneService = new PhonesService();

  it('should get the list of phones', () => {
    jest.spyOn(phoneService.httpClient, 'get');

    phoneService.getPhones();

    expect(phoneService.httpClient.get).toHaveBeenCalledWith('/phones');
  });
});
