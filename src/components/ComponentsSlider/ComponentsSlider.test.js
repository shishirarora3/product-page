/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import ComponentsSlider from './ComponentsSlider';

describe('Component: <ComponentsSlider />', () => {
  it('shallow render of ComponentsSlider length', () => {
    const wrapper = shallow(
      <Provider
        store={{ insertCss: () => {}, subscribe: () => {},
        dispatch: () => {}, getState: () => {} }}
      >
        <div>
          <ComponentsSlider />
        </div>
      </Provider>
    );
    expect(wrapper.length).to.be.equal(1);
    expect(wrapper.children().length).to.equal(1); // Shallow wrapper returns only one child
  });

  it('Should have props difined', () => {
    const wrapper = shallow(
      <Provider
        store={{ insertCss: () => {}, subscribe: () => {},
        dispatch: () => {}, getState: () => {} }}
      >
        <div>
          <ComponentsSlider />
        </div>
      </Provider>
    );
    expect(wrapper.props().autoplay).to.be.defined;
    expect(wrapper.props().noOfSlidesShown).to.be.defined;
  });
});

