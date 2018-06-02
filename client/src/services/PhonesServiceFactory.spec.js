import { PhonesServiceFactory } from './PhonesServiceFactory';
import { PhonesService } from './PhonesService';

describe('PhonesServiceFactory', () => {
  it('should create an instance of PhonesService', () => {
    expect(new PhonesServiceFactory()).toBeInstanceOf(PhonesService);
  });
});
