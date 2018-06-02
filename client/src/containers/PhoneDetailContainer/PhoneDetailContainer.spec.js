import React from 'react';
import { shallow } from 'enzyme';
import PhoneDetailContainer from './PhoneDetailContainer';

describe('PhotoDetailContainer suite', () => {
  it('renders PhotoDetailContainer without any state injected', () => {
    const component = shallow(<PhoneDetailContainer />);
    expect(component).toBeDefined();
  });
});
