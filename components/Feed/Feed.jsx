import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Post from '../Post/Post';
import Screen from '../Layout/Screen';
import usePosts from '../../hooks/usePosts';

export default function Feed() {
  const { posts, loading, error } = usePosts();

  return (
    <Screen>
      <View className="w-screen flex-1 justify-center">
        {loading ? (
          <ActivityIndicator color={'black'} size={'large'} />
        ) : error ? (
          <Text className="text-center p-4 text-red-500">{error}</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={posts}
            renderItem={(post) => <Post post={post} />}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={4}
            maxToRenderPerBatch={8}
            ListEmptyComponent={() => (
              <Text className="text-center p-4">No posts available</Text>
            )}
          />
        )}
      </View>
    </Screen>
  );
}
