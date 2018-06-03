// @flow
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

type Props = {
  children: any,
  location: string
};

class ScrollToTop extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export { ScrollToTop as ScrollToTopTesting };

export default withRouter(ScrollToTop);
