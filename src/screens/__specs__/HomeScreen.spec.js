import React from 'react';

import { shallow } from 'enzyme';
import HomeScreen from '../HomeScreen';

describe('HomeScreen specs', () => {
  it('shows application name', () => {
    const component = shallow(<HomeScreen />);
    expect(component.contains('Sample-project')).toBe(true);
  });
});

