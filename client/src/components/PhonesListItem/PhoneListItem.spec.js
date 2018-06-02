import React from 'react';
import { shallow } from 'enzyme';

import PhoneListItem from './PhoneListItem';

describe('PhoneListItem suite', () => {
  it('should render the ProductsListItem component', () => {
    const component = shallow(<PhoneListItem phone={{}} />);
    expect(component).toBeDefined();
  });
});
