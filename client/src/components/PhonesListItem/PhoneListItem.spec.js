import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import PhoneListItem from './PhoneListItem';
import { phonesFake } from 'fakes/phone';

describe('PhoneListItem suite', () => {
  it('should render the ProductsListItem component', () => {
    const jsxComponent = (
      <Router>
        <PhoneListItem phone={phonesFake[0]} />
      </Router>
    );
    const component = shallow(jsxComponent);
    const tree = renderer.create(jsxComponent).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
