import React from 'react';
import renderer from 'react-test-renderer';
import SizeSelector from '../../src/components/SizeSelector';

test('renders correctly', () => {
    const tree = renderer.create(<SizeSelector
        sizes={['8', '9', '10', '11']}
        selectedSize={'8'}
        onSelect={() => {}}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});