import React from 'react';
import { shallow } from 'enzyme';

import PhoneList from './PhonesList';

describe('PhoneList suite', () => {
  it('should render the ProductsList component', () => {
    const component = shallow(<PhoneList phones={[]} />);
    expect(component).toBeDefined();
  });
});
