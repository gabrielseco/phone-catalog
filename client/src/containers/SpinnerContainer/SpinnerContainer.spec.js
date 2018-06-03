import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SpinnerContainer from './SpinnerContainer';

describe('SpinnerContainer suite', () => {
  it('should render the SpinnerContainer component', () => {
    const jsxComponent = <SpinnerContainer />;
    const component = shallow(jsxComponent);
    const tree = renderer.create(jsxComponent).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
