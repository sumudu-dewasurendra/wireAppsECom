import React from 'react';
import renderer from 'react-test-renderer';
import NotificationDot from '../../src/components/NotificationDot';

test('renders correctly', () => {
  const tree = renderer.create(<NotificationDot count={0}  />).toJSON();
  expect(tree).toMatchSnapshot();
});