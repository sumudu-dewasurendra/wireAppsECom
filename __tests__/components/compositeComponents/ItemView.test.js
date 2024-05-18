import React from 'react';
import renderer from 'react-test-renderer';
import ItemView from '../../../src/components/compositeComponents/ItemView';
import { productItems } from '../../../testData/sampleData';

test('renders correctly', () => {
  const tree = renderer.create(<ItemView
        product={productItems[0]}
        onPress={() => {}}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});