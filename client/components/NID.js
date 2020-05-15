import React, { Component, useEffect, useState } from 'react';
import { AirbnbRating, Divider, Avatar, Rating, Badge, Icon } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import testList from './testList';

const FONT = Platform.OS == 'android' ? 'monospace' : 'arial';

const Item = ({ name, image, rating }) => {
  console.log(image);
  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Avatar
          size='large'
          rounded
          source={{
            uri: image,
          }}
        />
        <View style={styles.status}>
          <Text style={styles.designerName}>{name}</Text>
          <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
        </View>
        <AirbnbRating
          style={styles.rating}
          type='custom'
          imageSize={25}
          ratingColor='#3498db'
          ratingBackgroundColor='transparent'
          readonly
          startingValue={rating}
        />
      </View>
    </TouchableOpacity>
  );
};

export default function NID({ navigation }) {
  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: true,
    });
  });

  const [designers, setDesigners] = useState([
    {
      id: '1',
      name: 'Stephania Sam',
      active: true,
      rating: 3,
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
      id: '2',
      name: 'Henry Smith',
      active: true,
      rating: 3,
      image:
        'https://www.headshotsnyc.com/wp-content/uploads/galleries/post-44/Stock%20broker%20headshot%20outside%20in%20NYC.jpg',
    },
    {
      id: '3',
      name: 'Stacey Wayne',
      active: true,
      rating: 3,
      image: 'https://i.pinimg.com/736x/f5/1d/e5/f51de5a7734a755b1d20009bd3441d92.jpg',
    },
    {
      id: '4',
      name: 'Roger Davis',
      active: true,
      rating: 3,
      image: 'https://kelicommheadshots.com/wp-content/uploads/2016/04/Doug-256x256.jpg',
    },
    {
      id: '5',
      name: 'Amy Yam',
      active: true,
      rating: 3,
      image:
        'https://i1.wp.com/www.susanshek.com/wp-content/uploads/2020/03/susan-shek-headshot-5-1-1.jpg?resize=256,256&ssl=1',
    },
    {
      id: '6',
      name: 'Janice Lema',
      active: true,
      rating: 3,
      image: 'https://www.nlgja.org/2015/wp-content/uploads/sites/5/2015/08/headshot.jpeg',
    },
    {
      id: '7',
      name: 'Stephen Chia',
      active: true,
      rating: 3,
      image: 'https://warriorcentrichealth.com/wp-content/uploads/2019/09/Joe-Hurd-1.png',
    },
    { id: '8', name: 'Ranee Rausch', active: true, rating: 3, image: 'https://i.picsum.photos/id/623/200/300.jpg' },
    { id: '9', name: 'Denis Pinter', active: true, rating: 3, image: 'https://i.picsum.photos/id/402/200/300.jpg' },
    { id: '10', name: 'Juliana Whitner', active: true, rating: 3, image: 'https://i.picsum.photos/id/879/200/300.jpg' },
    { id: '11', name: 'Darnell Ferrero', active: true, rating: 3, image: 'https://i.picsum.photos/id/582/200/300.jpg' },
    { id: '12', name: 'Karrie Noblitt', active: true, rating: 3, image: 'https://i.picsum.photos/id/399/200/300.jpg' },
    { id: '13', name: 'Mohamed Li', active: true, rating: 3, image: 'https://i.picsum.photos/id/1026/4621/3070.jpg' },
    {
      id: '14',
      name: 'Aurelia Farnum',
      active: true,
      rating: 3,
      image: 'https://i.picsum.photos/id/1027/2848/4272.jpg',
    },
    { id: '15', name: 'Ben Breeding', active: true, rating: 3, image: 'https://i.picsum.photos/id/1056/3988/2720.jpg' },
    { id: '16', name: 'Ollie Moniz', active: true, rating: 3, image: 'https://i.picsum.photos/id/7/200/300.jpg' },
    { id: '17', name: 'Daniel Carrales', active: true, rating: 3, image: 'https://i.picsum.photos/id/204/200/300.jpg' },
  ]);

  const renderSeparator = () => {
    return <View style={{ height: 1, width: '100%', backgroundColor: 'lightgrey' }} />;
  };

  return (
    <SafeAreaView style={{ paddingTop: 10, paddingBottom: 0 }}>
      <FlatList
        ItemSeparatorComponent={renderSeparator}
        data={designers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item style={styles.item} name={item.name} rating={item.rating} image={item.image} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },

  status: {
    justifyContent: 'space-between',
  },

  findID: {
    fontFamily: FONT,
    fontSize: 25,
    alignSelf: 'center',
  },
  imagebutton: {
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 90,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 50,
  },

  designerName: {
    alignSelf: 'center',
    fontSize: 15,
    marginBottom: 10,
  },
  rating: {
    alignSelf: 'center',
  },
  designerNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  active: {
    padding: 15,
    marginBottom: 15,
    color: '#fff',
  },
});
