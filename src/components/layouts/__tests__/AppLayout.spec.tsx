import React from 'react';
import renderer from 'react-test-renderer';

import AppLayout from '../AppLayout';

describe('<AppLayout/>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppLayout/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
