import React, { Component } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native"
import { COLORS } from "../../../constants"
import {Dimensions} from 'react-native';
const { width, height } = Dimensions.get("window");
import { useTranslation } from 'react-i18next';
import { readData } from '../../../utils';

const Home = ( { navigation: { navigate } } ) => {

    const onProfileScreenPress = () => {
        navigate('profile');
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
            icon: <Image source={require('../../../assets/icons/account.png')}/>,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "Superior UMS"
        },
        {
            id: 2,
            icon: <Image source={require('../../../assets/icons/account.png')}/>,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Superior LMS"
        },
        {
            id: 3,
            icon: <Image source={require('../../../assets/icons/account.png')}/>,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Superior ERP"
        }
    ]

    const [features, setFeatures] = React.useState(featuresData)

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: 10 * 2 , marginTop: '20%'}}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontFamily: "Roboto-Black", fontSize: 30, lineHeight: 36 }}>Hello!</Text>
                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20, lineHeight: 30, color: COLORS.gray }}>{email}</Text>
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
                        <View
                            style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                height: 10,
                                width: 10,
                                backgroundColor: COLORS.red,
                                borderRadius: 5
                            }}
                        >
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    function renderBanner() {
        return (
            <View
                style={{
                    height: 120,
                    borderRadius: 20,
                }}
            >
                <Image
                    source={require('../../../assets/icons/account.png')}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20
                    }}
                />
            </View>
        )
    }

    function renderFeatures() {

        const Header = () => (
            <View style={{ marginBottom: 10 * 2 }}>
                <Text style={{ fontFamily: "Roboto-Bold", fontSize: 20, lineHeight: 22 }}>Superior University Portal</Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: 10 * 2, width: 60, alignItems: 'center' }}
                onPress={() => console.log(item.description)}
            >
                <View
                    style={{
                        height: 50,
                        width: 50,
                        marginBottom: 5,
                        borderRadius: 20,
                        backgroundColor: COLORS.background,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={require('../../../assets/icons/account.png')}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.background
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
            <View>
                {renderHeader()}
                {renderBanner()}
                {renderFeatures()}
                {renderPromoHeader()}
            </View>
        )

        const renderPromoHeader = (navigation) => (
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
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderPromos()}
        </SafeAreaView>
    )
}

export default Home;