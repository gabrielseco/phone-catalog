import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import PhoneList from './PhoneList';
import { phonesFake } from 'fakes/phone';

describe('PhoneList suite', () => {
  it('should render the ProductsList component', () => {
    const jsxComponent = (
      <Router>
        <PhoneList phones={phonesFake} />
      </Router>
    );
    const component = shallow(<PhoneList phones={phonesFake} />);
    const tree = renderer.create(jsxComponent).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
