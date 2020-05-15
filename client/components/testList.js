import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Picker,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, Avatar, Rating, Badge, Icon } from 'react-native-elements';

const Item = ({ name, image, rating }) => {
  return (
    <TouchableOpacity>
      <View>
        <Avatar
          size='large'
          containerStyle={{ borderWidth: 1 }}
          rounded
          source={{
            uri: { image },
          }}
        />
        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.designerName}>{name}</Text>
          <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
        </View>
        <Rating
          type='custom'
          imageSize={35}
          ratingColor='#3498db'
          ratingBackgroundColor='transparent'
          readonly
          startingValue={rating}
        />
      </View>
    </TouchableOpacity>
  );
};

const testList = () => {
  const [designers, setDesigners] = useState([
    {
      id: 1,
      name: 'Stephania Sam',
      active: true,
      rating: 3,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
      id: 2,
      name: 'Henry Smith',
      active: true,
      rating: 3,
      image:
        'https://www.headshotsnyc.com/wp-content/uploads/galleries/post-44/Stock%20broker%20headshot%20outside%20in%20NYC.jpg',
    },
    {
      id: 3,
      name: 'Stacey Wayne',
      active: true,
      rating: 3,
      image: 'https://i.pinimg.com/736x/f5/1d/e5/f51de5a7734a755b1d20009bd3441d92.jpg',
    },
    {
      id: 4,
      name: 'Roger Davis',
      active: true,
      rating: 3,
      image: 'https://kelicommheadshots.com/wp-content/uploads/2016/04/Doug-256x256.jpg',
    },
    {
      id: 5,
      name: 'Amy Yam',
      active: true,
      rating: 3,
      image:
        'https://i1.wp.com/www.susanshek.com/wp-content/uploads/2020/03/susan-shek-headshot-5-1-1.jpg?resize=256,256&ssl=1',
    },
    {
      id: 6,
      name: 'Janice Lema',
      active: true,
      rating: 3,
      image: 'https://www.nlgja.org/2015/wp-content/uploads/sites/5/2015/08/headshot.jpeg',
    },
    {
      id: 7,
      name: 'Stephen Chia',
      active: true,
      rating: 3,
      image: 'https://warriorcentrichealth.com/wp-content/uploads/2019/09/Joe-Hurd-1.png',
    },
    { id: 8, name: 'Ranee Rausch', active: true, rating: 3, image: 'https://i.picsum.photos/id/623/200/300.jpg' },
    { id: 9, name: 'Denis Pinter', active: true, rating: 3, image: 'https://i.picsum.photos/id/402/200/300.jpg' },
    { id: 10, name: 'Juliana Whitner', active: true, rating: 3, image: 'https://i.picsum.photos/id/879/200/300.jpg' },
    { id: 11, name: 'Darnell Ferrero', active: true, rating: 3, image: 'https://i.picsum.photos/id/582/200/300.jpg' },
    { id: 12, name: 'Karrie Noblitt', active: true, rating: 3, image: 'https://i.picsum.photos/id/399/200/300.jpg' },
    { id: 13, name: 'Mohamed Li', active: true, rating: 3, image: 'https://i.picsum.photos/id/1026/4621/3070.jpg' },
    { id: 14, name: 'Aurelia Farnum', active: true, rating: 3, image: 'https://i.picsum.photos/id/1027/2848/4272.jpg' },
    { id: 15, name: 'Ben Breeding', active: true, rating: 3, image: 'https://i.picsum.photos/id/1056/3988/2720.jpg' },
    { id: 16, name: 'Ollie Moniz', active: true, rating: 3, image: 'https://i.picsum.photos/id/7/200/300.jpg' },
    { id: 17, name: 'Daniel Carrales', active: true, rating: 3, image: 'https://i.picsum.photos/id/204/200/300.jpg' },
  ]);
  return (
    <SafeAreaView>
      <FlatList
        data={designers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item name={item.name} rating={item.rating} image={item.image} />}
      />
    </SafeAreaView>
  );
};

export default testList;
