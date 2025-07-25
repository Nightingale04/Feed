import { Text, View } from 'react-native';
import { formatDate } from '../../utils/formatter';

export default function Footer({ name, description, createdAt }) {
  const formatedDate = formatDate(createdAt);

  return (
    <View className="px-5 pt-1 gap-1">
      <View className="flex-row gap-2">
        <Text className="font-bold">{name}</Text>
        <Text>{description}</Text>
      </View>
      <Text className="text-gray-500">{formatedDate}</Text>
    </View>
  );
}
