import React, { Component, useState, Fragment } from 'react';
import { Avatar, Button, Divider, Icon, Rating } from 'react-native-elements';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const FONT = Platform.OS == 'android' ? 'monospace' : 'arial';

export default function Review({ route, navigation }) {
  const [modalOpen, setModal] = useState(false);
  const { name } = route.params;
  const { uri } = route.params;

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <Text style={styles.reviewHeading}> Reviews </Text>
      </SafeAreaView>

      <Divider style={styles.divider} />

      <View style={styles.reviewsRow}>
        <Avatar size='large' containerStyle={{ borderWidth: 3 }} rounded source={{ uri: uri }} />

        <Text style={styles.avatarText}>{name}</Text>
        <Text style={styles.avatarText}>Account</Text>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.iconRow}>
        <TouchableOpacity>
          <Icon name='account' size={35} type='material-community' />
        </TouchableOpacity>

        <View style={styles.verticalDivider}></View>

        <TouchableOpacity>
          <Icon name='comment-text-multiple-outline' size={35} type='material-community' />
        </TouchableOpacity>
      </View>

      <Divider style={styles.divider} />

      <Modal animationType='fade' visible={modalOpen} transparent>
        <TouchableOpacity
          style={styles.centeredView}
          onPressOut={() => {
            setModal(false);
          }}
        >
          <View style={styles.modalView}>
            <Text>
              Great communication when I connected with Janice! She was very nice and she answered all of the questions
              I had concernig the layout of my apartment.
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>

      <ScrollView>
        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Raven Jane</Text>
            <Text style={styles.size}>Great communication when I ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Shanice Arroyo</Text>
            <Text style={styles.size}>Helped me at every step of the ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={4}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Kevin Weir</Text>
            <Text style={styles.size}>Provided some great advice ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Freja Britton</Text>
            <Text style={styles.size}>Was very clear in explaining ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Isra Povey</Text>
            <Text style={styles.size}>Was very helpful ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={5}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Shereen Ryder</Text>
            <Text style={styles.size}>Answered my questions ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Mahdi Coleman</Text>
            <Text style={styles.size}>Great insight ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={4}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Kaime Gonzalez</Text>
            <Text style={styles.size}>Good designer eye ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={5}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Freyja Kim</Text>
            <Text style={styles.size}>Master designer ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={2}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Tammy Macgregor</Text>
            <Text style={styles.size}>Highly knowledgeable ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={4}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Ilyas Barber</Text>
            <Text style={styles.size}>Very nice person ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={2}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Robin James</Text>
            <Text style={styles.size}>Quality at a great price ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={5}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Bruce Kent</Text>
            <Text style={styles.size}>Highly recommend ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Parker Peter</Text>
            <Text style={styles.size}>A go to for design questions ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='#3498db'
              ratingBackgroundColor='transparent'
              readonly
              startingValue={4}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.dividerThin} />

        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text style={styles.name}>Mary Jane</Text>
            <Text style={styles.size}>Very helpful ...</Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type='custom'
              imageSize={30}
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

        <TouchableOpacity style={styles.designerNavigation} onPress={() => navigation.navigate('Chat')}>
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
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  reviewHeading: {
    fontFamily: FONT,
    fontSize: 25,
    alignSelf: 'center',
  },
  reviewsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  avatarText: {
    alignSelf: 'center',
    fontSize: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  divider: {
    height: 4,
    backgroundColor: 'black',
  },
  dividerThin: {
    height: 2,
    backgroundColor: 'black',
  },
  verticalDivider: {
    borderLeftWidth: 3,
    borderLeftColor: 'black',
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rating: {
    alignSelf: 'center',
  },
  nameAndRating: {
    alignSelf: 'center',
    //paddingLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  designerNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  size: {
    fontSize: 15,

    color: 'red',

    paddingTop: 5,
    paddingBottom: 5,
  },
  name: {
    fontSize: 20,
  },
});
