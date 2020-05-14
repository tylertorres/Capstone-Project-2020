import React, { Component, useEffect } from 'react';
import { Divider, Avatar, Rating, Badge, Icon } from 'react-native-elements';
import { StyleSheet, View, Text, Image, ImageBackground, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const FONT = Platform.OS == 'android' ? 'monospace' : 'arial';

export default function NID({ route, navigation }) {
  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: true,
    });
  });

  return (
    <View style={styles.designers}>
      <SafeAreaView>
        <Text style={styles.findID}> Find a Designer </Text>
      </SafeAreaView>

      <Divider style={styles.divider} />
      <ScrollView>
        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Nick',
              uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}> Nick</Text>
            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Henry Smith',
              uri:
                'https://www.headshotsnyc.com/wp-content/uploads/galleries/post-44/Stock%20broker%20headshot%20outside%20in%20NYC.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri:
                'https://www.headshotsnyc.com/wp-content/uploads/galleries/post-44/Stock%20broker%20headshot%20outside%20in%20NYC.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Henry Smith</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Stacy Wayne',
              uri: 'https://i.pinimg.com/736x/f5/1d/e5/f51de5a7734a755b1d20009bd3441d92.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://i.pinimg.com/736x/f5/1d/e5/f51de5a7734a755b1d20009bd3441d92.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Stacy Wayne</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Roger Davis',
              uri: 'https://kelicommheadshots.com/wp-content/uploads/2016/04/Doug-256x256.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://kelicommheadshots.com/wp-content/uploads/2016/04/Doug-256x256.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Roger Davis</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Amy Yam',
              uri:
                'https://i1.wp.com/www.susanshek.com/wp-content/uploads/2020/03/susan-shek-headshot-5-1-1.jpg?resize=256%2C256&ssl=1',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri:
                'https://i1.wp.com/www.susanshek.com/wp-content/uploads/2020/03/susan-shek-headshot-5-1-1.jpg?resize=256%2C256&ssl=1',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Amy Yam</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Janice Lema',
              uri: 'https://www.nlgja.org/2015/wp-content/uploads/sites/5/2015/08/headshot.jpeg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://www.nlgja.org/2015/wp-content/uploads/sites/5/2015/08/headshot.jpeg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Janice Lema</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={2}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Stephen Chia',
              uri: 'https://warriorcentrichealth.com/wp-content/uploads/2019/09/Joe-Hurd-1.png',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://warriorcentrichealth.com/wp-content/uploads/2019/09/Joe-Hurd-1.png',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Stephen Chia</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>
        <Divider style={styles.divider} />
        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Ranee Rausch',
              uri: 'https://i.picsum.photos/id/623/200/300.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://i.picsum.photos/id/623/200/300.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Ranee Rausch</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>
        <Divider style={styles.divider} />
        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Denis Pinter',
              uri: 'https://i.picsum.photos/id/402/200/300.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://i.picsum.photos/id/402/200/300.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Denis Pinter</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>
        <Divider style={styles.divider} />
        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Juliana Whitner',
              uri: 'https://i.picsum.photos/id/879/200/300.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://i.picsum.photos/id/879/200/300.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Juliana Whitner</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Darnell Ferrero',
              uri: 'https://i.picsum.photos/id/582/200/300.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://i.picsum.photos/id/582/200/300.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Darnell Ferrero</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Karrie Noblitt',
              uri: 'https://i.picsum.photos/id/399/200/300.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://i.picsum.photos/id/399/200/300.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Karrie Noblitt</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Mohamed Li',
              uri: 'https://i.picsum.photos/id/1026/4621/3070.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://i.picsum.photos/id/1026/4621/3070.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Mohamed Li</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Aurelia Farnum',
              uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Aurelia Farnum</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Ben Breeding',
              uri: 'https://i.picsum.photos/id/1056/3988/2720.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://i.picsum.photos/id/1056/3988/2720.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Ben Breeding</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />
        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Ollie Moniz',
              uri: 'https://i.picsum.photos/id/7/200/300.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://i.picsum.photos/id/7/200/300.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Ollie Moniz</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate('ID', {
              name: 'Danial Carrales',
              uri: 'https://i.picsum.photos/id/204/200/300.jpg',
              id: 'NID',
            })
          }
        >
          <Avatar
            size='large'
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: 'https://i.picsum.photos/id/204/200/300.jpg',
            }}
          />

          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.designerName}>Danial Carrales</Text>

            <Badge value={<Text style={styles.active}>Active</Text>} status='success' badgeStyle={{ padding: 10 }} />
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={35}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Divider style={styles.divider} />

      <SafeAreaView style={styles.bottomIcons}>
        <TouchableOpacity>
          <Icon name='account-multiple' type='material-community' size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.designerNavigation} onPress={() => navigation.navigate('Chat', { name: name })}>
          <Icon name='sc-telegram' size={50} type='evilicon' />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name='flare' size={50} type='material-community' />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  findID: {
    fontFamily: FONT,
    fontSize: 25,
    alignSelf: 'center',
    paddingTop: 10,
  },
  imagebutton: {
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 90,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  designers: {
    flex: 1,
    justifyContent: 'space-around',
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  divider: {
    height: 3,
    backgroundColor: 'black',
  },
  designerName: {
    alignSelf: 'center',
    fontSize: 15,
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
