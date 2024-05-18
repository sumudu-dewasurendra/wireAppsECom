import React from 'react';
import renderer from 'react-test-renderer';
import CheckoutBottomBar from '../../../src/components/compositeComponents/CheckoutBottomBar';
import { basketItems } from '../../../testData/sampleData';
import { totalWithCurrency } from '../../../src/common/commonFunctions';

test('renders correctly', () => {
  const tree = renderer.create(<CheckoutBottomBar
    total={totalWithCurrency(basketItems)} />).toJSON();
  expect(tree).toMatchSnapshot();
});