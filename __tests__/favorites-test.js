import 'react-native';
import React from 'react';
import Favorites from '../src/screens/favorite/index';
import renderer from 'react-test-renderer';

test('Favorites page renders correctly', () => {
  const snap = renderer.create(<Favorites />);

  expect(snap.toJSON()).toMatchSnapshot();
});
