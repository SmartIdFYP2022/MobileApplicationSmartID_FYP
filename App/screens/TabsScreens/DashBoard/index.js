import React, { Component } from "react";
import {
    SafeAreaView,
    View,
    ScrollView,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from "react-native"
import { COLORS } from "../../../constants"
import {Dimensions} from 'react-native';
const { width, height } = Dimensions.get("window");
import { useTranslation } from 'react-i18next';
import { readData } from '../../../utils';
import {LinearGradient} from 'expo-linear-gradient';

const Home = ( { navigation: { navigate } } ) => {

    const onProfileScreenPress = () => {
        navigate('detail');
    }

    const { t, i18n } = useTranslation();
    const [email, setEmail] = React.useState('');

    React.useEffect(async () => {
        const data = await readData('email');
        setEmail(data);
    }, []);

    const featuresData = [
        {
            id: 1,
            Image: <Image source={require('../../../assets/images/superior.png')}  style={{width: 10, height: 10}}/>,
            color: COLORS.background,
            backgroundColor: COLORS.background,
            description: "Superior UMS"
        },
        {
            id: 2,
            Image: <Image source={require('../../../assets/images/superior.png')}/>,
            color: COLORS.background,
            backgroundColor: COLORS.background,
            description: "Superior LMS"
        },
        {
            id: 3,
            Image: <Image source={require('../../../assets/images/superior.png')}/>,
            color: COLORS.background,
            backgroundColor: COLORS.background,
            description: "Superior ERP"
        }
    ]

    const [features, setFeatures] = React.useState(featuresData)

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: 10 * 2 , marginTop: '20%'}}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontFamily: "Roboto-Black", fontSize: 30, lineHeight: 36 }}>Hello!</Text>
                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: 24, lineHeight: 30, color: COLORS.black }}>{email}</Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.lightGray
                        }}
                    >
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    function renderBanner() {
        return (
                <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    colors={[COLORS.primary, COLORS.primary2]}
                    style={{
                    padding: 15, borderRadius: 20, marginBottom: 20,
                    }}>
                    <View 
                        style={{
                            height: 150,
                            borderRadius: 20
                        }}>
                    </View>
                </LinearGradient>
        )
    }

    function renderFeatures() {

        const Header = () => (
            <View style={{ marginBottom: 10 * 2 }}>
                <Text style={{ fontFamily: "Roboto-Bold", fontSize: 20, lineHeight: 22 }}>University Portal</Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: 10 * 2 , alignItems: 'center' }}
                onPress={() => console.log(item.description)}
            >
                <View
                    style={{
                        height: 60,
                        width: 60,
                        marginBottom: 5,
                        borderRadius: 20,
                        backgroundColor: COLORS.background,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}
                >
                    <Image
                        source={require('../../../assets/images/superior.png')}
                        resizeMode="contain"
                        style={{
                            height: 45,
                            width: 45
                        }}
                    />
                </View>
                <Text style={{ textAlign: 'center', flexWrap: 'wrap', fontFamily: "Roboto-Regular", fontSize: 14, lineHeight: 22 }}>{item.description}</Text>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: 10* 2 }}
            />
        )
    }

    function renderPromos() {

        const HeaderComponent = () => (
            <ScrollView>
                {renderHeader()}
                {renderBanner()}
                {renderFeatures()}
                {renderPromoHeader()}
            </ScrollView>
        )

        const renderPromoHeader = (navigation) => (
            <View style={{marginTop: '5%'}}>
                <View
                    style={{
                        flexDirection: 'row',
                        marginBottom: 10
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 20, lineHeight: 22 }}>Daily Report</Text>
                    </View>
                    <TouchableOpacity
                        onPress={ onProfileScreenPress }
                    >
                        <Text style={{ color: COLORS.gray, fontFamily: "Roboto-Regular", fontSize: 14, lineHeight: 22 }}>View All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{ width: 250 }}>
                                <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                    Started following <Text style={{ fontWeight: "400" }}>Jake Challeahe</Text> and <Text style={{ fontWeight: "400" }}>Luis Poteer</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{ width: 250 }}>
                                <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                    Started following <Text style={{ fontWeight: "400" }}>Luke Harper</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{ width: 250 }}>
                                <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                    Started following <Text style={{ fontWeight: "400" }}>Jake Challeahe</Text> and <Text style={{ fontWeight: "400" }}>Luis Poteer</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{ width: 250 }}>
                                <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                    Started following <Text style={{ fontWeight: "400" }}>Luke Harper</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{ width: 250 }}>
                                <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                    Started following <Text style={{ fontWeight: "400" }}>Jake Challeahe</Text> and <Text style={{ fontWeight: "400" }}>Luis Poteer</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{ width: 250 }}>
                                <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                    Started following <Text style={{ fontWeight: "400" }}>Luke Harper</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginVertical: 8,
                    width: width / 2.5
                }}
                onPress={() => console.log(item.title)}
            >
                <View
                    style={{
                        height: 80,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: COLORS.primary
                    }}
                >
                </View>

                <View
                    style={{
                        padding: 10,
                        backgroundColor: COLORS.lightGray,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 }}>{item.title}</Text>
                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14, lineHeight: 22 }}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ paddingHorizontal: 10* 3 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View style={{ marginBottom: 80 }}>
                    </View>
                }
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
            {renderPromos()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: COLORS.white,
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: '10%'
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});

export default Home;