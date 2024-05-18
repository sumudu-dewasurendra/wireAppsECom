import React from 'react';
import renderer from 'react-test-renderer';
import NotificationDot from '../../src/components/compositeComponents/NotificationDot';

test('renders correctly', () => {
  const tree = renderer.create(<NotificationDot count={0}  />).toJSON();
  expect(tree).toMatchSnapshot();
});