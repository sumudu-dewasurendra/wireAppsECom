import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../src/components/Button';
import { BUTTON_TYPES } from '../../src/utils/types';

test('renders correctly', () => {
    const tree = renderer.create(<Button
        title="Test Button"
        onPress={() => {}}
        type={BUTTON_TYPES.SOLID}
        color={"secondary"}
        textColor={"white"}
        disabled={true}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});