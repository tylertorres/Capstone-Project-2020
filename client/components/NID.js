import React, { Component, useEffect } from 'react';
import { Divider, Avatar, Rating, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

const FONT = Platform.OS == 'android' ? 'monospace' : 'arial';

export default function NID({ navigation }) {
  return (
    <View style={styles.designers}>
      <Text style={styles.findID}> Find a Designer </Text>

      <Divider style={styles.divider} />

      <TouchableOpacity
        style={{ flexDirection: 'row' }}
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
          <Badge value={<Text style={styles.active}>Active</Text>} status='success' />
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Rating
            type='custom'
            imageSize={35}
            ratingColor='#3498db'
            ratingBackgroundColor='transparent'
            readonly
            startingValue={3}
            style={{ justifyContent: 'center', paddingLeft: 30 }}
          />
        </View>
      </TouchableOpacity>

      <Divider style={styles.divider} />

      <TouchableOpacity
        style={{ flexDirection: 'row' }}
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

          <Badge value={<Text style={styles.active}>Active</Text>} status='success' />
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Rating
            type='custom'
            imageSize={35}
            ratingColor='#3498db'
            ratingBackgroundColor='transparent'
            readonly
            startingValue={3}
            style={{ justifyContent: 'center', paddingLeft: 30 }}
          />
        </View>
      </TouchableOpacity>

      <Divider style={styles.divider} />

      <TouchableOpacity
        style={{ flexDirection: 'row' }}
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

          <Badge value={<Text style={styles.active}>Active</Text>} status='success' />
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Rating
            type='custom'
            imageSize={35}
            ratingColor='#3498db'
            ratingBackgroundColor='transparent'
            readonly
            startingValue={3}
            style={{ justifyContent: 'center', paddingLeft: 30 }}
          />
        </View>
      </TouchableOpacity>

      <Divider style={styles.divider} />

      <TouchableOpacity
        style={{ flexDirection: 'row' }}
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

          <Badge value={<Text style={styles.active}>Active</Text>} status='success' />
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Rating
            type='custom'
            imageSize={35}
            ratingColor='#3498db'
            ratingBackgroundColor='transparent'
            readonly
            startingValue={3}
            style={{ justifyContent: 'center', paddingLeft: 30 }}
          />
        </View>
      </TouchableOpacity>

      <Divider style={styles.divider} />

      <TouchableOpacity
        style={{ flexDirection: 'row' }}
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

          <Badge value={<Text style={styles.active}>Active</Text>} status='success' />
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Rating
            type='custom'
            imageSize={35}
            ratingColor='#3498db'
            ratingBackgroundColor='transparent'
            readonly
            startingValue={3}
            style={{ justifyContent: 'center', paddingLeft: 50 }}
          />
        </View>
      </TouchableOpacity>

      <Divider style={styles.divider} />

      <TouchableOpacity
        style={{ flexDirection: 'row' }}
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

          <Badge value={<Text style={styles.active}>Active</Text>} status='success' />
        </View>

        <Rating
          type='custom'
          imageSize={35}
          ratingColor='#3498db'
          ratingBackgroundColor='transparent'
          readonly
          startingValue={2}
          style={{ justifyContent: 'center', paddingLeft: 30 }}
        />
      </TouchableOpacity>

      <Divider style={styles.divider} />

      <TouchableOpacity
        style={{ flexDirection: 'row' }}
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

          <Badge
            containerStyle={styles.badge}
            value={<Text style={styles.active}>Active</Text>}
            status='success'
          />
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Rating
            type='custom'
            imageSize={35}
            ratingColor='#3498db'
            ratingBackgroundColor='transparent'
            readonly
            startingValue={3}
            style={{ justifyContent: 'center', paddingLeft: 30 }}
          />
        </View>
      </TouchableOpacity>

      <Divider style={styles.divider} />

      <TouchableOpacity
        style={{ alignSelf: 'center' }}
        onPress={() => navigation.navigate('Chat', { name: 'Inbox' })}
      >
        <Icon reverse name='comment' size={65} type='ionicon' color='blue' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  findID: {
    fontFamily: FONT,
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
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
    fontSize: 20,
    paddingLeft: 10,
  },
  active: {
    padding: 30,
    textAlign: 'center',
    marginBottom: 15,
  },
});
