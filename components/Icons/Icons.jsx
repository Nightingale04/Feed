import {
  AntDesign,
  FontAwesome,
  Foundation,
  Ionicons,
} from '@expo/vector-icons';

function HomeIcon({ color }) {
  return <Foundation name="home" size={24} color={color} />;
}

function LikedIcon({ handlePress }) {
  return <AntDesign name="heart" size={24} color="red" onPress={handlePress} />;
}

function LikeIcon({ handlePress }) {
  return (
    <AntDesign name="hearto" size={24} color="black" onPress={handlePress} />
  );
}

function CommentIcon() {
  return (
    <Ionicons
      name="chatbubble-outline"
      size={24}
      color="black"
      className="transform -scale-x-100"
    />
  );
}

function ShareIcon() {
  return <Ionicons name="paper-plane-outline" size={24} color="black" />;
}

function SaveIcon({ handlePress }) {
  return (
    <FontAwesome
      name="bookmark-o"
      size={24}
      color="black"
      onPress={handlePress}
    />
  );
}

function SavedIcon({ handlePress }) {
  return (
    <FontAwesome
      name="bookmark"
      size={24}
      color="black"
      onPress={handlePress}
    />
  );
}

export {
  HomeIcon,
  LikedIcon,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SaveIcon,
  SavedIcon,
};
