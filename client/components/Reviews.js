import React, { Component, useState, Fragment } from "react";
import { Avatar, Button, Divider, Icon, Rating } from "react-native-elements";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";

const FONT = Platform.OS == "android" ? "monospace" : "arial";

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
        <Avatar
          size="large"
          containerStyle={{ borderWidth: 3 }}
          rounded
          source={{ uri: uri }}
        />

        <Text style={styles.avatarText}>{name}</Text>
        <Text style={styles.avatarText}>Account</Text>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.iconRow}>
        <TouchableOpacity>
          <Icon name="account" size={35} type="material-community" />
        </TouchableOpacity>

        <View style={styles.verticalDivider}></View>

        <TouchableOpacity>
          <Icon
            name="comment-text-multiple-outline"
            size={35}
            type="material-community"
          />
        </TouchableOpacity>
      </View>

      <Divider style={styles.divider} />

      <Modal animationType="fade" visible={modalOpen} transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon
              name="navigation"
              size={50}
              type="material-community"
              onPress={() => {
                setModal(false);
              }}
            />
            <Text>Hello from the world of the modal</Text>
          </View>
        </View>
      </Modal>

      <ScrollView>
        <TouchableOpacity
          style={styles.ratingRow}
          onPress={() => {
            setModal(true);
          }}
        >
          <View style={styles.nameAndRating}>
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
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
            <Text>Raven Jane</Text>
            <Text>Lorem ipsum reviews this was a </Text>
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
              readonly
              startingValue={3}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Divider style={styles.divider} />

      <SafeAreaView style={styles.bottomIcons}>
        <TouchableOpacity>
          <Icon name="account-multiple" type="material-community" size={50} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() => navigation.navigate("Chat")}
        >
          <Icon name="sc-telegram" size={50} type="evilicon" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="flare" size={50} type="material-community" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-evenly",
  },
  reviewHeading: {
    fontFamily: FONT,
    fontSize: 25,
    alignSelf: "center",
  },
  reviewsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  avatarText: {
    alignSelf: "center",
    fontSize: 20,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  divider: {
    height: 4,
    backgroundColor: "black",
  },
  dividerThin: {
    height: 2,
    backgroundColor: "black",
  },
  verticalDivider: {
    borderLeftWidth: 3,
    borderLeftColor: "black",
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rating: {
    alignSelf: "center",
  },
  nameAndRating: {
    alignSelf: "center",
    paddingLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  designerNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
