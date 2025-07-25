import { View } from 'react-native';

export default function Screen({ children }) {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      {children}
    </View>
  );
}
