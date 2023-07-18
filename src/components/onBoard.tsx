import React, { useRef } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../assets/constants/colors";
import { useRouter } from "expo-router";

const slides = [
  {
    id: "1",
    title: "Find your favorites events here",
    image: require("../assets/home/image1.png"),
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    title: "Find your favorites nearby here",
    image: require("../assets/home/image1.png"),
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    title: "Update your upcoming event here",
    image: require("../assets/home/image1.png"),
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function OnBoard() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState<number>(0);
  const { width, height } = Dimensions.get("window");
  const flatListRef = useRef<any>(null);
  const Router = useRouter();

  const eventNavigatorFlatList = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const Footer = () => {
    const handleButtomNextPressFlatList = () => {
      if (currentSlideIndex < slides.length - 1) {
        setCurrentSlideIndex(currentSlideIndex + 1);
        flatListRef.current.scrollToIndex({ index: currentSlideIndex + 1 });
      }
    };

    return (
      <View style={styles.footer}>
        <View style={styles.navigator}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.primary,
                  width: 30,
                },
              ]}
            />
          ))}
        </View>
        <View style={{ marginBottom: 0 }}>
          <View style={{ height: 50 }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                currentSlideIndex === 2
                  ? Router.push("/detalhes")
                  : handleButtomNextPressFlatList()
              }
            >
              <Text style={styles.btnText}>
                {currentSlideIndex === 2 ? "Get Started" : "Next"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundLight }}>
      <StatusBar backgroundColor={COLORS.backgroundLight} />
      <FlatList
        ref={flatListRef}
        onMomentumScrollEnd={eventNavigatorFlatList}
        contentContainerStyle={{ height: height * 0.85 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} width={width} />}
      />
      <Footer />
    </SafeAreaView>
  );
}

const Slide = ({
  item,
  width,
}: {
  item: {
    id: string;
    title: string;
    subtitle: string;
    image?: any;
  };
  width: number;
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ height: "80%", width, resizeMode: "contain" }}
      />
      <View style={styles.view}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: COLORS.third,
    fontSize: 15,
    marginTop: 20,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: COLORS.secondary,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  navigator: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 35,
  },
  indicator: {
    height: 4,
    width: 5,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 5,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginLeft: 15,
    text: COLORS.secondary,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    fontWeight: "400",
  },
  footer: {
    height: "15%",
  },
});
