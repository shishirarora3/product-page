/* eslint-disable no-underscore-dangle */

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';


import Container from './Container';
import configureStore from '../../../src/store/configureStore';

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    storeState: PropTypes.object,
    injectStore: PropTypes.func
  }

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
  }



  getChildContext() {
    return {
      insertCss: styles => {
        if (styles && typeof styles._insertCss === 'function') {
          styles._insertCss();
        }
        // insertCss function in isomorphic-style-loader expect a return value
        return () => {};
      },
      setTitle: () => {},
      setMeta: () => {},
    };
  }

  getStore() {
    const store = configureStore(
      // merge the defaultProps with actual props
      Object.assign({}, this.props.storeState), {}
    );
    this.props.injectStore && this.props.injectStore(store);
    return store;
  }

  render() {
    const store = this.getStore();

    /*
       Provider does not do hot reload from redux > 2.0,
       so re-rendering the Wrapper if state changes by providing it as key
     */

    return (
      <Provider store={store} key={JSON.stringify(store.getState())}>
        <Container>
          {this.props.children}
        </Container>
      </Provider>
    );
  }
}
export default Wrapper;
