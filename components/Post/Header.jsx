import { Text, View } from 'react-native';
import Profile from './Profile';

export default function Header({ name, avatar, location }) {
  return (
    <View className="flex-row px-5 py-3 items-center gap-4">
      <Profile image={avatar} />
      <View>
        <Text className="font-bold">{name}</Text>
        <Text>{location}</Text>
      </View>
    </View>
  );
}
