import { useState } from 'react';
import { Text, View } from 'react-native';
import { formatNumber } from '../../utils/formatter';
import {
  CommentIcon,
  LikedIcon,
  LikeIcon,
  SavedIcon,
  SaveIcon,
  ShareIcon,
} from '../Icons/Icons';

export default function Interaction({ liked, likes, comments, saved }) {
  const [isLiked, setLike] = useState(liked);
  const [isSaved, setSave] = useState(saved);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLikePress = () => {
    setLike(!isLiked);
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
  };

  const handleSavePress = () => {
    setSave(!isSaved);
  };

  return (
    <View className="flex-row px-5 pt-3 p-b-5 pb-1 justify-between">
      <View className="flex-row gap-4">
        <View className="flex-row items-center gap-2">
          {isLiked ? (
            <LikedIcon handlePress={handleLikePress} />
          ) : (
            <LikeIcon handlePress={handleLikePress} />
          )}
          <Text className="font-bold">{formatNumber(likesCount)}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <CommentIcon />
          <Text className="font-bold">{formatNumber(comments)}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <ShareIcon />
        </View>
      </View>
      <View className="flex-row gap-4">
        {isSaved ? (
          <SavedIcon handlePress={handleSavePress} />
        ) : (
          <SaveIcon handlePress={handleSavePress} />
        )}
      </View>
    </View>
  );
}
