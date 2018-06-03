import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import {
  PhoneDetailContainerTesting,
  mapStateToProps
} from './PhoneDetailContainer';
import { phonesFake } from 'fakes/phone';
import { SpinnerContainer } from 'containers';

const dispatch = jest.fn();

describe('PhoneDetailContainer', () => {
  it('renders PhoneDetailContainer with a phone', () => {
    const wrapper = shallow(
      <PhoneDetailContainerTesting dispatch={dispatch} phone={phonesFake[0]} />
    );
    const tree = renderer
      .create(
        <PhoneDetailContainerTesting
          dispatch={dispatch}
          phone={phonesFake[0]}
        />
      )
      .toJSON();

    expect(wrapper).toBeDefined();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find(SpinnerContainer).length).toBe(0);
    expect(dispatch).not.toHaveBeenCalled();
  });

  it('renders PhoneListContainer without the phone', () => {
    const wrapper = shallow(
      <PhoneDetailContainerTesting dispatch={dispatch} />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.find(SpinnerContainer).length).toBe(1);
    expect(dispatch).toHaveBeenCalled();
  });

  it('should test mapStateToProps', () => {
    const state = {
      phones: {
        phones: phonesFake,
        isLoading: false,
        isLoaded: false
      }
    };

    const ownProps = {
      match: {
        params: {
          id: phonesFake[0].id.toString()
        }
      }
    };
    expect(mapStateToProps(state, ownProps)).toEqual({
      phone: phonesFake[0]
    });
  });
});
