import { Image } from 'react-native';

export default function Profile({ image }) {
  const fixedUrl = image.replace('cloudflare-ipfs.com', 'gateway.pinata.cloud');
  return (
    <Image
      source={{
        uri: fixedUrl,
      }}
      className="w-10 h-10 object-cover rounded-full"
    />
  );
}
