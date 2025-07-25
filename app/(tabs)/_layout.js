import { Tabs } from 'expo-router';
import { HomeIcon } from '../../components/Icons/Icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
