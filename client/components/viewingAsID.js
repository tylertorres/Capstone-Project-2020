import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ImageStore,
  SafeAreaView,
  FlatList,
  Modal,
  Alert,
} from 'react-native';
import { Avatar, Button, Divider, Icon, AirbnbRating } from 'react-native-elements';
import { IconButton } from 'react-native-paper';
import { render } from 'react-dom';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import UserContext from './context/user/userContext';

const Nav = ({ navigation, setMainView }) => {
  const [onPortfolio, setPortfolio] = useState(true);

  const passUp = bool => {
    setPortfolio(bool);
    setMainView(bool);
  };

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => passUp(true)} style={styles.navPortfolio}>
        <IconButton icon={onPortfolio ? 'briefcase' : 'briefcase-outline'} size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => passUp(false)} style={styles.navReviews}>
        <IconButton icon={!onPortfolio ? 'comment-text-multiple' : 'comment-text-multiple-outline'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const PortfolioItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Image style={styles.portfolioImage} source={{ uri: item.image }} />
    </TouchableOpacity>
  );
};

const ReviewItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.reviewContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textContainerName}>{item.name}</Text>
          <Text style={styles.textContainerDesc} numberOfLines={2}>
            {' '}
            {item.description}
          </Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <AirbnbRating
            selectedColor='teal'
            size={23}
            isDisabled={true}
            showRating={false}
            defaultRating={item.rating}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const renderSeparator = () => {
  return <View style={{ height: 1, width: '100%', backgroundColor: 'lightgrey' }} />;
};

const viewingAsID = ({ navigation }) => {
  const userContext = useContext(UserContext);
  const { name, profilePic, bio } = userContext;
  const [save, setSave] = useState(false);

  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: true,
    });

    navigation.setOptions({
      title: name,
      headerLeft: () => null,
      headerRight: () => {
        return save ? (
          <TouchableOpacity onPress={() => navigation.navigate('Request', { name })} style={styles.connectBtn}>
            <Text style={styles.connectText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <IconButton onPress={() => settingsAlert()} icon='cogs' color='#007FFF' size={25} />
        );
      },
    });
  });

  const [modalOpen, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [mainView, setMainView] = useState(true);
  const [columnCount, setCount] = useState(2);
  const [reviewModal, setReviewModal] = useState(false);
  const [reviewModalInfo, setReviewModalInfo] = useState({});

  const portfolioImages = [
    {
      id: '1',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description:
        'Testing how exactly i will do things in this way and which they will be playing. As you can see this room exhibits qualites of a major hardcore fucking man  and that is his life goal to be and be ambgious as hell.',
    },
    {
      id: '2',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly i will do things in this way and which they will be playing',
    },
    {
      id: '3',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly i will do things in this way and which they will be playing',
    },
    {
      id: '4',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly I will do things in this way and which they will be playing',
    },
    {
      id: '5',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly I will do things in this way and which they will be playing',
    },
    {
      id: '6',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly I will do things in this way and which they will be playing',
    },
    {
      id: '7',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly I will do things in this way and which they will be playing',
    },
    {
      id: '8',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly I will do things in this way and which they will be playing',
    },
    {
      id: '9',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly I will do things in this way and which they will be playing',
    },
  ];

  const reviews = [
    {
      key: '1',
      name: 'Stephania Sam',
      rating: 5,
      description:
        'They were extremely helpful in getting my room to where i wanted it to be!They were extremely helpful in getting my room to where i wanted it to be!They were extremely helpful in getting my room to where i wanted it to be!They were extremely helpful in getting my room to where i wanted it to be!',
    },
    {
      key: '2',
      name: 'Henry Smith',
      rating: 4,
    },
    {
      key: '3',
      name: 'Stacey Wayne',
      rating: 3,
    },
    {
      key: '4',
      name: 'Roger Davis',
      rating: 4,
    },
    {
      key: '5',
      name: 'Amy Yam',
      rating: 4,
    },
    {
      key: '6',
      name: 'Janice Lema',
      rating: 4,
    },
    {
      key: '7',
      name: 'Stephen Chia',
      rating: 5,
    },
    { key: '8', name: 'Ranee Rausch', rating: 4 },
    { key: '9', name: 'Denis Pinter', rating: 3 },
    { key: '10', name: 'Juliana Whitner', rating: 4 },
    { key: '11', name: 'Darnell Ferrero', rating: 2 },
    { key: '12', name: 'Karrie Noblitt', rating: 2 },
    { key: '13', name: 'Mohamed Li', rating: 5 },
    {
      key: '14',
      name: 'Aurelia Farnum',
      rating: 3,
    },
    { key: '15', name: 'Ben Breeding', rating: 3 },
    { key: '16', name: 'Ollie Moniz', rating: 4 },
    { key: '17', name: 'Daniel Carrales', rating: 4 },
  ];

  const setupModal = item => {
    setModal(!modalOpen);
    setModalInfo(item);
  };

  const closeModal = () => {
    setModal(!modalOpen);
    setModalInfo({});
  };

  const setupLayout = bool => {
    setMainView(bool);
    setCount(bool ? 2 : 1);
  };

  // Review Modal //

  const setupReviewModal = item => {
    setReviewModal(!reviewModal);
    setReviewModalInfo(item);
  };

  const closeReviewModal = () => {
    setReviewModal(!reviewModal);
    setReviewModalInfo({});
  };

  // Settings Logic //
  const settingsAlert = () => {
    Alert.alert('Account Settings', '', [
      {
        text: 'Change Bio',
        onPress: () => setSave(!save),

        // Change the button to save
        // Change state of edit
        // When save is clicked,
      },
      {
        text: 'Change Profile Picture',
      },
      {
        text: 'Back',
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Avatar size={115} rounded source={{ uri: profilePic }} />
        <TextInput
          maxLength={200}
          multiline={true}
          numberOfLines={0}
          editable={save ? true : false}
          style={styles.headerText}
        >
          This is random text to test how to make it more user friendly
        </TextInput>
      </View>
      <View>
        <Nav setMainView={bool => setupLayout(bool)} />
      </View>
      <View style={styles.mainView}>
        {mainView ? (
          <FlatList
            data={portfolioImages}
            numColumns={columnCount}
            key={columnCount}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PortfolioItem onPress={() => setupModal(item)} item={item} />}
          />
        ) : (
          <FlatList
            ItemSeparatorComponent={renderSeparator}
            data={reviews}
            numColumns={columnCount}
            key={columnCount}
            renderItem={({ item }) => <ReviewItem onPress={() => setupReviewModal(item)} item={item} />}
          />
        )}

        <Modal onPressOut={() => closeReviewModal()} animationType='slide' visible={reviewModal} transparent>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback onPressOut={() => closeReviewModal()}>
              <View style={styles.reviewModalView}>
                <View style={styles.reviewModalHeader}>
                  <Text style={styles.reviewModalText}>{reviewModalInfo.name}</Text>
                  <AirbnbRating
                    selectedColor='white'
                    size={23}
                    isDisabled={true}
                    showRating={false}
                    defaultRating={reviewModalInfo.rating}
                  />
                </View>
                <ScrollView onStartShouldSetResponder={() => true}>
                  <Text style={styles.reviewModalDesc}>{reviewModalInfo.description}</Text>
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Modal>

        <Modal animationType='fade' visible={modalOpen} transparent>
          <TouchableOpacity activeOpacity={1} onPressOut={() => closeModal()} style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalImageContainer}>
                <Image style={styles.modalImage} source={{ uri: modalInfo.image }} />
              </View>
              <View style={styles.modalTextContainer}>
                <Text style={styles.modalText}>{modalInfo.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    /* height: 150, */
  },
  headerText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Avenir-Roman',
    width: 250,
    lineHeight: 23,
    alignSelf: 'flex-start',
  },
  nav: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: 10,
  },
  navPortfolio: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.3,
    borderRightColor: 'grey',
  },
  navReviews: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 0.3,
    borderLeftColor: 'grey',
  },
  connectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectText: {
    fontSize: 17,
    color: '#007FFF',
    marginRight: 10,
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioImage: {
    width: 150,
    height: 150,
    margin: 20,
    borderWidth: 0.5,
    borderColor: 'black',
    alignSelf: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  modalView: {
    height: 400,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  modalImage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 400,
    height: 250,
  },
  modalTextContainer: {
    padding: 15,
  },
  modalText: {
    fontSize: 16,
    fontFamily: 'Avenir-Roman',
  },
  reviewContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  textContainer: {
    alignItems: 'center',
    width: 200,
    flexDirection: 'column',
  },
  textContainerName: {
    marginBottom: 5,
    fontFamily: 'Avenir-Roman',
    fontSize: 16,
  },
  textContainerDesc: {
    fontFamily: 'Avenir-Roman',
    fontWeight: '500',
  },
  reviewModalView: {
    alignItems: 'center',
    height: 210,
    backgroundColor: 'teal',
    borderRadius: 30,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  reviewModalHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  reviewModalText: {
    fontSize: 17,
    fontFamily: 'Avenir-Roman',
    color: 'white',
    fontWeight: '600',
    marginBottom: 10,
  },
  reviewModalDesc: {
    width: 350,
    fontFamily: 'Avenir-Roman',
    color: 'white',
    fontWeight: '600',
    padding: 15,
  },
});

export default viewingAsID;
