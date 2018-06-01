import React from 'react';
import { shallow } from 'enzyme';
import PhotoDetailContainer from './PhotoDetailContainer';

describe('PhotoDetailContainer suite', () => {
  it('renders PhotoDetailContainer without any state injected', () => {
    const component = shallow(<PhotoDetailContainer />);
    expect(component).toBeDefined();
  });
});
