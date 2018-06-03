import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import { PhoneListItemTesting } from './PhoneListItem';
import { phonesFake } from 'fakes/phone';

describe('PhoneListItem suite', () => {
  const jsxComponent = (
    <Router>
      <PhoneListItemTesting phone={phonesFake[0]} />
    </Router>
  );
  const route = `detail/${phonesFake[0].id}`;
  it('should render the ProductsListItem component', () => {
    const component = shallow(jsxComponent);
    const tree = renderer.create(jsxComponent).toJSON();
    expect(component).toBeDefined();
    expect(tree).toMatchSnapshot();
  });

  it('should click on the div', () => {
    const history = {
      push: jest.fn()
    };
    const jsxComponentWithHistory = (
      <PhoneListItemTesting phone={phonesFake[0]} history={history} />
    );
    const component = shallow(jsxComponentWithHistory);
    expect(component).toBeDefined();

    const container = component.find('.phone-list-item');
    container.simulate('click');

    expect(history.push).toHaveBeenCalledWith(route);
  });

  it('should click on the anchor', () => {
    const history = {
      push: jest.fn()
    };
    const evt = {
      stopPropagation: jest.fn(),
      preventDefault: jest.fn()
    };
    const jsxComponentWithHistory = (
      <PhoneListItemTesting phone={phonesFake[0]} history={history} />
    );
    const component = shallow(jsxComponentWithHistory);
    expect(component).toBeDefined();

    const container = component.find('a');
    container.simulate('click', evt);

    expect(evt.stopPropagation).toHaveBeenCalled();
    expect(evt.preventDefault).toHaveBeenCalled();
    expect(history.push).toHaveBeenCalledWith(route);
  });

  it('should call history.push when touch ENTER in keyboard ', () => {
    const history = {
      push: jest.fn()
    };
    const jsxComponentWithHistory = (
      <PhoneListItemTesting phone={phonesFake[0]} history={history} />
    );
    const component = shallow(jsxComponentWithHistory);
    expect(component).toBeDefined();

    const container = component.find('.phone-list-item');
    container.simulate('keyup', { keyCode: 13 });

    expect(history.push).toHaveBeenCalledWith(route);
  });

  it('should not call history.push when touch a random key in keyboard ', () => {
    const history = {
      push: jest.fn()
    };
    const jsxComponentWithHistory = (
      <PhoneListItemTesting phone={phonesFake[0]} history={history} />
    );
    const component = shallow(jsxComponentWithHistory);
    expect(component).toBeDefined();

    const container = component.find('.phone-list-item');
    container.simulate('keyup', { keyCode: 47 });

    expect(history.push).not.toHaveBeenCalled();
  });
});
