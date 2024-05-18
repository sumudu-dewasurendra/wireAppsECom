import React from 'react';
import renderer from 'react-test-renderer';
import ProductMainDetailView from '../../../src/components/compositeComponents/ProductMainDetailView';
import { productItems } from '../../../testData/sampleData';

const product = productItems[0];

test('renders correctly', () => {
    const tree = renderer.create(<ProductMainDetailView
        description={product.description}
        brandName={product.brandName}
        name={product.name}
        colour={product.colour}
        amount={product.price.amount}
        currency={product.price.currency}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});