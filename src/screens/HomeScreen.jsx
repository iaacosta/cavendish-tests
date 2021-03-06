import React, { useState } from 'react';
import { View, Text } from 'react-native';

import tailwind from '../utils/tailwindRn';

export default function HomeScreen() {
  const [projectName] = useState('Sample-project');

  return (
    <View style={tailwind('p-4 bg-gray-900 flex-1 justify-center items-center')}>
      <Text style={tailwind('text-white')}>
        Hello {projectName}!
      </Text>
    </View>
  );
}
