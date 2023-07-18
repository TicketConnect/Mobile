import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../../assets/constants/colors";

export default function OnBoard() {
    const { width, height } = Dimensions.get('window');
    const slides = [
        {
            id: '1',
            title: 'Best Digital Solution',
            image: require('../../../assets/home/image1.png'),
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '2',
            title: 'Achieve Your Goals',
            image: require('../../../assets/home/image1.png'),
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '3',
            title: 'Increase Your Value',
            image: require('../../../assets/home/image1.png'),
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundLight }}>
            <StatusBar backgroundColor={COLORS.backgroundLight} />
            <FlatList
                contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} width={width} />}
            />
        </SafeAreaView>
    );
}

const Slide = ({ item, width }: {
    item: {
        id: string;
        title: string;
        subtitle: string;
        image?: any;
    }, width: number
}) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={item.image}
                style={{ height: '75%', width, resizeMode: 'contain' }}
            />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    subtitle: {
        color: COLORS.third,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
    title: {
        color: COLORS.secondary,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});