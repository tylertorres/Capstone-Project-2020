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
  Alert,
} from 'react-native';
import { Avatar, Button, Divider, Icon, AirbnbRating } from 'react-native-elements';
import { IconButton } from 'react-native-paper';
import { render } from 'react-dom';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import UserContext from './context/user/userContext';
import ImagePicker from 'react-native-image-crop-picker';
import Fire from '../firebase/Fire';
import Modal from 'react-native-modal';

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

const PortfolioItem = ({ item, onPress, deleteItem }) => {
  return (
    <TouchableOpacity onLongPress={() => deleteItem()} onPress={() => onPress()}>
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
  const { user } = userContext;
  const { active, name, email, bio, photo, id } = user;
  const [save, setSave] = useState(false);

  const onImageSubmission = () => {
    ImagePicker.openPicker({ maxFiles: 1 })
      .then(image => {
        setImageUpload(image.path);
        setUploadModal();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const setTransition = message => {
    setChatVisible(!chatModalVisible);
  };

  useEffect(() => {
    Fire.shared.database.limitToLast(1).on('child_added', snapshot => {
      const lastMessage = [snapshot.val()];
      if (!isFirst) {
        setIsFirst(true);
        return;
      }
      setTransition(lastMessage);
    });
  }, []);

  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: true,
    });

    navigation.setOptions({
      title: name,
      headerLeft: () => <IconButton icon='camera' onPress={() => onImageSubmission()} color='#007FFF' size={23} />,
      headerRight: () => {
        return save ? (
          <TouchableOpacity onPress={() => saveState()} style={styles.connectBtn}>
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
  const [bioText, setBioText] = useState(''); // come back to
  const [isActive, setActive] = useState(false); // come back to
  const [deleting, setDeleting] = useState(false);
  const [uploadImage, setImageUpload] = useState(null);
  const [uploadModal, setUpload] = useState(false);
  const [imageDesc, setDesc] = useState('');

  // Designer Chat Modal //
  const [chatModalVisible, setChatVisible] = useState(false);
  const [userL, setUser] = useState('Nick Samaroo'); // will be an object
  const [isFirst, setIsFirst] = useState(false);

  const [portfolioImages, setImages] = useState([
    {
      id: '1',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description:
        'A room themed around a certain color and aesthetic that captured the embodiment of the people living there.',
    },
    {
      id: '2',
      image:
        'https://www.mydomaine.com/thmb/FYZUwRE2KjWot0IYUVXVTu0YZbk=/1500x1500/smart/filters:no_upscale()/KatherineCarter-c674461f12354fdc956b6b5e0185c5cd.jpg',
      description:
        'Testing how exactly I will do things in this way and outlined the beginning stages of the architecture.',
    },
    {
      id: '3',
      image:
        'https://p7.hiclipart.com/preview/585/287/766/interior-design-services-architecture-drawing-sketch-interior-designer.jpg',
      description:
        'Testing how exactly I will do things in this way and outlined the beginning stages of the architecture.',
    },
    {
      id: '4',
      image: 'https://www.dhoumm.co/cdn-k1/no/interior-design-wallpaper-background_room-interior-and-decoration.jpg',
      description:
        'Testing how exactly I will do things in this way and outlined the beginning stages of the architecture.',
    },
    {
      id: '5',
      image:
        'https://img.freepik.com/free-photo/modern-workspace-with-futuristic-background_23-2148327021.jpg?size=626&ext=jpg',
      description:
        'Testing how exactly I will do things in this way and outlined the beginning stages of the architecture.',
    },
    {
      id: '6',
      image:
        'https://fthmb.tqn.com/kVpo4zFn-IRel7_g-hB3vXseD0A=/puresaltinteriors.-cb503015f1954be8ab6f750cda87a326.jpg',
      description:
        'Testing how exactly I will do things in this way and outlined the beginning stages of the architecture.',
    },
    {
      id: '7',
      image:
        'https://i7.pngguru.com/preview/633/993/215/bookcase-interior-design-services-designer-creative-interior-design.jpg',
      description:
        'Testing how exactly I will do things in this way and outlined the beginning stages of the architecture.',
    },
    {
      id: '8',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl9lxsiiXx7-CldlpvNM5vlPG__d4jyr9UmvkCl_6pQAhEJBov&usqp=CAU',
      description:
        'Testing how exactly I will do things in this way and outlined the beginning stages of the architecture.',
    },
    {
      id: '9',
      image: 'https://i.pinimg.com/originals/0b/ba/30/0bba3056e8720649e305f5b49173d77e.jpg',
      description:
        'Testing how exactly I will do things in this way and outlined the beginning stages of the architecture.',
    },
  ]);
  const reviews = [
    {
      key: '1',
      name: 'Stephania Sam',
      rating: 5,
      description:
        'They were extremely helpful in getting my room to where I wanted it to be! They were extremely helpful in getting my room to where I wanted it to be!They were extremely helpful in getting my room to where I wanted it to be! They were extremely helpful in getting my room to where I wanted it to be!',
    },
    {
      key: '2',
      name: 'Henry Smith',
      rating: 4,
      description: 'Great communication when I ...',
    },
    {
      key: '3',
      name: 'Stacey Wayne',
      rating: 3,
      description: 'Helped me at every step of the ...',
    },
    {
      key: '4',
      name: 'Roger Davis',
      rating: 4,
      description: 'Provided some great advice ...',
    },
    {
      key: '5',
      name: 'Amy Yam',
      rating: 4,
      description: 'Was very clear in explaining ...',
    },
    {
      key: '6',
      name: 'Janice Lema',
      rating: 4,
      description: 'Was very helpful in designing my room ...',
    },
    {
      key: '7',
      name: 'Stephen Chia',
      rating: 5,
      description: 'Answered my questions ...',
    },
    {
      key: '8',
      name: 'Ranee Rausch',
      rating: 4,
      description: 'Very insighful room layouts ...',
    },
    {
      key: '9',
      name: 'Denis Pinter',
      rating: 3,
      description: 'Caring individual and thought oriented ...',
    },
    {
      key: '10',
      name: 'Juliana Whitner',
      rating: 4,
      description: 'Took time to explain nuances of room ...',
    },
    {
      key: '11',
      name: 'Darnell Ferrero',
      rating: 2,
      description: 'Very cool! Talked to me nicely ...',
    },
    {
      key: '12',
      name: 'Karrie Noblitt',
      rating: 2,
      description: 'Caring and understanding of time ...',
    },
    {
      key: '13',
      name: 'Mohamed Li',
      rating: 5,
      description: 'Very cool, very nice, 10 /10 ...',
    },
    {
      key: '14',
      name: 'Aurelia Farnum',
      rating: 3,
      description: 'Had my doubts in the beginning but pulled around ...',
    },
    {
      key: '15',
      name: 'Ben Breeding',
      rating: 3,
      description: 'They had me in the first half not gonna lie ...',
    },
    {
      key: '16',
      name: 'Ollie Moniz',
      rating: 4,
      description: 'I highly recommend choosing this designer! ...',
    },
    {
      key: '17',
      name: 'Daniel Carrales',
      rating: 4,
      description: 'Will be utilizing his services again! ...',
    },
  ];

  // Upload //

  const setUploadModal = () => {
    setUpload(!uploadModal);
  };

  const setupModal = item => {
    setModal(!modalOpen);
    setModalInfo(item);
  };

  const closeModal = () => {
    setModal(!modalOpen);
    setModalInfo({});
    setDeleting(false);
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
      },
      {
        text: 'Set Status',
        onPress: () => setStatus(),
      },
      {
        text: 'Back',
      },
    ]);
  };

  const saveState = () => {
    setSave(!save);
  };

  const setStatus = () => {
    Alert.alert('Status', 'Change Status', [
      {
        text: 'Inactive',
        onPress: () => setActive(false),
        style: 'cancel',
      },
      {
        text: 'Active',
        onPress: () => setActive(true),
      },
    ]);
  };

  const deleteItem = item => {
    setDeleting(true);
    setupModal(item);
  };

  const finalizeDelete = () => {
    setImages(portfolioImages.filter(image => image.id != modalInfo.id));
    closeModal();
  };

  const finalizeUpload = () => {
    const newItem = {
      id: Math.random() * 10 + 101,
      image: uploadImage,
      description: imageDesc,
    };

    setImages([newItem, ...portfolioImages]);
    setUpload(false);
  };

  const handleChatModal = ({ swipingDirection }) => {
    if (swipingDirection === 'left') {
      setChatVisible(!chatModalVisible);
      return;
    }
    // Go to chat
    setChatVisible(!chatModalVisible);
    setTimeout(() => navigation.navigate('Chat', { name: userL, isDesigner: true }), 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Avatar
          activeOpacity={1}
          onPress={() => setChatVisible(!chatModalVisible)}
          containerStyle={isActive ? { borderWidth: 2.5, borderColor: 'green' } : {}}
          size={115}
          rounded
          source={{ uri: photo }}
        />
        <TextInput
          onChangeText={text => setBioText(text)}
          maxLength={200}
          multiline={true}
          numberOfLines={0}
          editable={save ? true : false}
          style={styles.headerText}
        >
          {bioText}
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
            renderItem={({ item }) => (
              <PortfolioItem deleteItem={() => deleteItem(item)} onPress={() => setupModal(item)} item={item} />
            )}
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
        {/* Modals */}

        <Modal
          isVisible={chatModalVisible}
          animationIn='slideInDown'
          animationInTiming={1000}
          animationOutTiming={500}
          swipeDirection={['left', 'right']}
          swipeThreshold={10}
          onSwipeComplete={swipeDirection => handleChatModal(swipeDirection)}
          transparent
          hasBackdrop={false}
        >
          <View style={styles.chatModalContainer}>
            <View style={styles.chatView}>
              <View style={styles.chatUser}>
                <Text numberOfLines={0} style={styles.chatText}>
                  {userL} wants your advice, will you accept?
                </Text>
              </View>
              <View style={styles.chatModalArrows}>
                <View style={styles.chatDecline}>
                  <IconButton color='#a50000' icon='arrow-left' />
                  <Text style={styles.chatDeclineText}>Decline</Text>
                </View>
                <View style={styles.chatAccept}>
                  <Text style={styles.chatAcceptText}>Accept</Text>
                  <IconButton color='white' icon='arrow-right' />
                </View>
              </View>
            </View>
          </View>
        </Modal>

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
                {deleting && (
                  <View style={styles.deleteContainer}>
                    <TouchableOpacity onPress={() => finalizeDelete()} activeOpacity={0.7} style={styles.deleteBtn}>
                      <Text style={styles.deleteBtnText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </Modal>

        <Modal animationType='slide' visible={uploadModal} transparent>
          <View style={styles.uploadModal}>
            <View style={styles.uploadView}>
              <Image style={styles.modalImage} source={{ uri: uploadImage }} />
              <View style={styles.uploadTextContainer}>
                <TextInput
                  maxLength={100}
                  placeholder='Type a descriptionn...'
                  multiline={true}
                  numberOfLines={0}
                  style={styles.uploadText}
                  onChangeText={text => setDesc(text)}
                />
              </View>
              <TouchableOpacity onPress={() => finalizeUpload()} activeOpacity={0.7} style={styles.uploadBtn}>
                <Text style={styles.uploadBtnText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    width: 405,
    height: 225,
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
  deleteContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  deleteBtn: {
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#528c9e',
    width: 150,
  },
  deleteBtnText: {
    color: 'white',
  },
  uploadModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadView: {
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
  uploadTextContainer: {
    padding: 15,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText: {
    fontSize: 16,
    fontFamily: 'Avenir-Roman',
  },
  uploadBtn: {
    alignSelf: 'center',
    borderWidth: 0.2,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#528c9e',
    width: 150,
    marginTop: 15,
    marginBottom: 10,
  },
  uploadBtnText: {
    color: 'white',
    textAlign: 'center',
  },
  chatModalContainer: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatView: {
    backgroundColor: 'teal',
    borderRadius: 35,
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
  chatText: {
    fontSize: 16,
    fontFamily: 'Avenir-Roman',
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
  chatModalArrows: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chatDecline: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  chatAccept: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  chatDeclineText: {
    marginRight: 50,
    fontSize: 15,
    color: '#a50000',
    fontWeight: '600',
  },
  chatAcceptText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
  },
  chatUser: {
    marginTop: 10,
    marginHorizontal: 20,
  },
});

export default viewingAsID;
