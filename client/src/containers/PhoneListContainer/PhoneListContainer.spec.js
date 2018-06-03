import React from 'react';
import { shallow } from 'enzyme';
import {
  PhotoListContainerTesting,
  mapStateToProps
} from './PhoneListContainer';
import { phonesFake } from 'fakes/phone';
import { PhoneList, Spinner } from 'components';

const dispatch = jest.fn();

describe('PhoneListContainer', () => {
  it('renders App with the loading state', () => {
    const wrapper = shallow(
      <PhotoListContainerTesting dispatch={dispatch} isLoading />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.find(Spinner).length).toBe(1);
    expect(wrapper.find(PhoneList).length).toBe(0);
  });

  it('renders App with the loading state', () => {
    const wrapper = shallow(
      <PhotoListContainerTesting dispatch={dispatch} isLoaded />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.find(Spinner).length).toBe(0);
    expect(wrapper.find(PhoneList).length).toBe(1);
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
    expect(mapStateToProps(state)).toEqual({
      phones: state.phones.phones,
      isLoading: state.phones.isLoading,
      isLoaded: state.phones.isLoaded
    });
  });
});
