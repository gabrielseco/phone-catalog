import React from 'react';
import { shallow } from 'enzyme';

import ProductsList from './ProductsList';

describe('ProductsList suite', () => {
  it('should render the ProductsList component', () => {
    const component = shallow(<ProductsList products={[]} />);
    expect(component).toBeDefined();
  });
});
