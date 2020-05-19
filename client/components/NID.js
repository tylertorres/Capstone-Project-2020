import React, { Component, useEffect, useState } from "react";
import {
  AirbnbRating,
  Divider,
  Avatar,
  Rating,
  Badge,
  Icon,
} from "react-native-elements";
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
} from "react-native";
import { disableExpoCliLogging } from "expo/build/logs/Logs";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const FONT = Platform.OS == "android" ? "monospace" : "arial";

const Item = ({ name, image, rating, onPress }) => {
  return (
<<<<<<< HEAD
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.itemContainer}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: image,
          }}
        />
        <View style={styles.status}>
          <Text style={styles.designerName}>{name}</Text>
          <Badge
            value={<Text style={styles.active}>Active</Text>}
            status="success"
            badgeStyle={{ padding: 10 }}
          />
        </View>
        <AirbnbRating
          selectedColor="teal"
          size={23}
          isDisabled={true}
          showRating={false}
          defaultRating={rating}
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

  const designers = [
    {
      id: "1",
      name: "Stephania Sam",
      active: true,
      rating: 5,
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      description:
        "Worked on several projects ranging from dining rooms, to living rooms, and more!\nSpecialties are dining rooms!\nCurrently freelancing and enjoy the craft of helper others!",
    },
    {
      id: "2",
      name: "Henry Smith",
      active: true,
      rating: 4,
      image:
        "https://www.headshotsnyc.com/wp-content/uploads/galleries/post-44/Stock%20broker%20headshot%20outside%20in%20NYC.jpg",
    },
    {
      id: "3",
      name: "Stacey Wayne",
      active: true,
      rating: 3,
      image:
        "https://i.pinimg.com/736x/f5/1d/e5/f51de5a7734a755b1d20009bd3441d92.jpg",
    },
    {
      id: "4",
      name: "Roger Davis",
      active: true,
      rating: 4,
      image:
        "https://kelicommheadshots.com/wp-content/uploads/2016/04/Doug-256x256.jpg",
    },
    {
      id: "5",
      name: "Amy Yam",
      active: true,
      rating: 4,
      image:
        "https://i1.wp.com/www.susanshek.com/wp-content/uploads/2020/03/susan-shek-headshot-5-1-1.jpg?resize=256,256&ssl=1",
    },
    {
      id: "6",
      name: "Janice Lema",
      active: true,
      rating: 4,
      image:
        "https://www.nlgja.org/2015/wp-content/uploads/sites/5/2015/08/headshot.jpeg",
    },
    {
      id: "7",
      name: "Stephen Chia",
      active: true,
      rating: 5,
      image:
        "https://warriorcentrichealth.com/wp-content/uploads/2019/09/Joe-Hurd-1.png",
    },
    {
      id: "8",
      name: "Ranee Rausch",
      active: true,
      rating: 4,
      image: "https://i.picsum.photos/id/623/200/300.jpg",
    },
    {
      id: "9",
      name: "Denis Pinter",
      active: true,
      rating: 3,
      image: "https://i.picsum.photos/id/402/200/300.jpg",
    },
    {
      id: "10",
      name: "Juliana Whitner",
      active: true,
      rating: 4,
      image: "https://i.picsum.photos/id/879/200/300.jpg",
    },
    {
      id: "11",
      name: "Darnell Ferrero",
      active: true,
      rating: 2,
      image: "https://i.picsum.photos/id/582/200/300.jpg",
    },
    {
      id: "12",
      name: "Karrie Noblitt",
      active: true,
      rating: 2,
      image: "https://i.picsum.photos/id/399/200/300.jpg",
    },
    {
      id: "13",
      name: "Mohamed Li",
      active: true,
      rating: 5,
      image: "https://i.picsum.photos/id/1026/4621/3070.jpg",
    },
    {
      id: "14",
      name: "Aurelia Farnum",
      active: true,
      rating: 3,
      image: "https://i.picsum.photos/id/1027/2848/4272.jpg",
    },
    {
      id: "15",
      name: "Ben Breeding",
      active: true,
      rating: 3,
      image: "https://i.picsum.photos/id/1056/3988/2720.jpg",
    },
    {
      id: "16",
      name: "Ollie Moniz",
      active: true,
      rating: 4,
      image: "https://i.picsum.photos/id/7/200/300.jpg",
    },
    {
      id: "17",
      name: "Daniel Carrales",
      active: true,
      rating: 4,
      image: "https://i.picsum.photos/id/204/200/300.jpg",
    },
  ];

  const renderSeparator = () => {
    return (
      <View
        style={{ height: 1, width: "100%", backgroundColor: "lightgrey" }}
      />
    );
  };

  const handleOnPress = (item) => {
    navigation.navigate("viewingID", { item });
  };
=======
    <View style={styles.designers}>
      <SafeAreaView>
        <Text style={styles.findID}> Find a Designer </Text>
      </SafeAreaView>

      <Divider style={styles.divider} />
      <ScrollView>
        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Nick",
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}> Nick</Text>
            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Henry Smith",
              uri:
                "https://www.headshotsnyc.com/wp-content/uploads/galleries/post-44/Stock%20broker%20headshot%20outside%20in%20NYC.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri:
                "https://www.headshotsnyc.com/wp-content/uploads/galleries/post-44/Stock%20broker%20headshot%20outside%20in%20NYC.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Henry Smith</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Stacy Wayne",
              uri:
                "https://i.pinimg.com/736x/f5/1d/e5/f51de5a7734a755b1d20009bd3441d92.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri:
                "https://i.pinimg.com/736x/f5/1d/e5/f51de5a7734a755b1d20009bd3441d92.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Stacy Wayne</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Roger Davis",
              uri:
                "https://kelicommheadshots.com/wp-content/uploads/2016/04/Doug-256x256.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri:
                "https://kelicommheadshots.com/wp-content/uploads/2016/04/Doug-256x256.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Roger Davis</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Amy Yam",
              uri:
                "https://i1.wp.com/www.susanshek.com/wp-content/uploads/2020/03/susan-shek-headshot-5-1-1.jpg?resize=256%2C256&ssl=1",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri:
                "https://i1.wp.com/www.susanshek.com/wp-content/uploads/2020/03/susan-shek-headshot-5-1-1.jpg?resize=256%2C256&ssl=1",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Amy Yam</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Janice Lema",
              uri:
                "https://www.nlgja.org/2015/wp-content/uploads/sites/5/2015/08/headshot.jpeg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri:
                "https://www.nlgja.org/2015/wp-content/uploads/sites/5/2015/08/headshot.jpeg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Janice Lema</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
          </View>

          <View style={styles.rating}>
            <Rating
              type="custom"
              imageSize={35}
              ratingColor="#3498db"
              ratingBackgroundColor="transparent"
              readonly
              startingValue={2}
            />
          </View>
        </TouchableOpacity>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Stephen Chia",
              uri:
                "https://warriorcentrichealth.com/wp-content/uploads/2019/09/Joe-Hurd-1.png",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri:
                "https://warriorcentrichealth.com/wp-content/uploads/2019/09/Joe-Hurd-1.png",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Stephen Chia</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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
        <Divider style={styles.divider} />
        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Ranee Rausch",
              uri: "https://i.picsum.photos/id/623/200/300.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: "https://i.picsum.photos/id/623/200/300.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Ranee Rausch</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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
        <Divider style={styles.divider} />
        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Denis Pinter",
              uri: "https://i.picsum.photos/id/402/200/300.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: "https://i.picsum.photos/id/402/200/300.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Denis Pinter</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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
        <Divider style={styles.divider} />
        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Juliana Whitner",
              uri: "https://i.picsum.photos/id/879/200/300.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: "https://i.picsum.photos/id/879/200/300.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Juliana Whitner</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Darnell Ferrero",
              uri: "https://i.picsum.photos/id/582/200/300.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: "https://i.picsum.photos/id/582/200/300.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Darnell Ferrero</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Karrie Noblitt",
              uri: "https://i.picsum.photos/id/399/200/300.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: "https://i.picsum.photos/id/399/200/300.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Karrie Noblitt</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Mohamed Li",
              uri: "https://i.picsum.photos/id/1026/4621/3070.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: "https://i.picsum.photos/id/1026/4621/3070.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Mohamed Li</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Aurelia Farnum",
              uri: "https://i.picsum.photos/id/1027/2848/4272.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: "https://i.picsum.photos/id/1027/2848/4272.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Aurelia Farnum</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Ben Breeding",
              uri: "https://i.picsum.photos/id/1056/3988/2720.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: "https://i.picsum.photos/id/1056/3988/2720.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Ben Breeding</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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

        <Divider style={styles.divider} />
        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Ollie Moniz",
              uri: "https://i.picsum.photos/id/7/200/300.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: "https://i.picsum.photos/id/7/200/300.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Ollie Moniz</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() =>
            navigation.navigate("ID", {
              name: "Danial Carrales",
              uri: "https://i.picsum.photos/id/204/200/300.jpg",
              id: "NID",
            })
          }
        >
          <Avatar
            size="large"
            containerStyle={{ borderWidth: 3 }}
            rounded
            source={{
              uri: "https://i.picsum.photos/id/204/200/300.jpg",
            }}
          />

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.designerName}>Danial Carrales</Text>

            <Badge
              value={<Text style={styles.active}>Active</Text>}
              status="success"
              badgeStyle={{ padding: 10 }}
            />
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
          onPress={() => navigation.navigate("Chat", { name: name })}
        >
          <Icon name="sc-telegram" size={50} type="evilicon" />
        </TouchableOpacity>
>>>>>>> parent of b56f43f... bfwfbewbh

  return (
    <SafeAreaView style={{ paddingTop: 10, paddingBottom: 0 }}>
      <FlatList
        ItemSeparatorComponent={renderSeparator}
        data={designers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item
            onPress={() => handleOnPress(item)}
            name={item.name}
            rating={item.rating}
            image={item.image}
            item={item}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  designerName: {
    alignSelf: "center",
    fontSize: 15,
    marginBottom: 10,
  },
  rating: {
    alignSelf: "center",
  },
  active: {
    padding: 15,
    marginBottom: 15,
    color: "#fff",
  },
});
