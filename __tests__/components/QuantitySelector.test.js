import React from 'react';
import renderer from 'react-test-renderer';
import QuantitySelector from '../../src/components/compositeComponents/QuantitySelector';

test('renders correctly', () => {
  const tree = renderer.create(<QuantitySelector
        quantity={1}
        onIncrease={() => {}}
        onDecrease={() => {}}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});