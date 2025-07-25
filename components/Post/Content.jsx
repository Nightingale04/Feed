import { Image, View, Platform, useWindowDimensions } from 'react-native';

export default function Content({ image }) {
  // The provided image URL doesn't work, so I'm going to use another image provider.
  const url = 'https://picsum.photos/640/480.jpg';
  const { height } = useWindowDimensions();

  const imageHeight = Platform.OS === 'web' || height > 800 ? 400 : 320;
  return (
    <View>
      <Image
        source={{ uri: url }}
        style={{ width: '100%', height: imageHeight, objectFit: 'cover' }}
      />
    </View>
  );
}
