import React from 'react';
import renderer from 'react-test-renderer';
import BasketItemView from '../../src/components/compositeComponents/BasketItemView';
import { basketItems } from '../../testData/sampleData';

const basketItem = basketItems[0];

test('renders correctly', () => {
  const tree = renderer.create(<BasketItemView
    product={basketItem.product}
    quantity={basketItem.quantity}
    size={basketItem.size}
    onPressDelete={() => {}}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});