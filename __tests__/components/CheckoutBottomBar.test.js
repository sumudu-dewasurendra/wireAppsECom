import React from 'react';
import renderer from 'react-test-renderer';
import CheckoutBottomBar from '../../src/components/compositeComponents/CheckoutBottomBar';
import { basketItems } from '../../testData/sampleData';

test('renders correctly', () => {
  const tree = renderer.create(<CheckoutBottomBar basketItems={basketItems} />).toJSON();
  expect(tree).toMatchSnapshot();
});