import React from 'react';
import App from 'components/App';

describe('components/App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render initial component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct component when rotation is paused', () => {
    wrapper.setState({ isPaused: true });
    expect(wrapper).toMatchSnapshot();
  });
});
