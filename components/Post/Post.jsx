import { View } from 'react-native';
import Header from './Header';
import Content from './Content';
import Interaction from './Interaction';
import Footer from './Footer';

export default function Post({ post: { item } }) {
  return (
    <View>
      <Header avatar={item.avatar} name={item.name} location={item.location} />
      <Content image={item.image} />
      <Interaction
        comments={item.comments}
        liked={item.liked}
        likes={item.likes}
        saved={item.saved}
      />
      <Footer
        name={item.name}
        description={item.description}
        createdAt={item.createdAt}
      />
    </View>
  );
}
