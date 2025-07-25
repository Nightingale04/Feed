import { Stack } from 'expo-router';
import { StatusBar, View } from 'react-native';
import '../global.css';

export default function Layout() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerTitle: 'Feed',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </View>
  );
}
