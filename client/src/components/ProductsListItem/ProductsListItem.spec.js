import React from 'react';
import { shallow } from 'enzyme';

import ProductsListItem from './ProductsListItem';

describe('ProductsListItem suite', () => {
  it('should render the ProductsListItem component', () => {
    const component = shallow(<ProductsListItem />);
    expect(component).toBeDefined();
  });
});
