import * as React from 'react';
import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../../constants';
import TabScreens from '../TabScreens';
import { replace } from '../../../navigation/RootNavigation';

const TabbedScreen = () => {

    const BackPress = () => {
        replace('BottomTabs');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background, }}>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: '12%',
                    paddingHorizontal: 27
                }}
                onPress={BackPress}
            >
                <Image
                    source={require('../../../assets/images/back.png')}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.black
                    }}
                />
                <Text style={{ marginLeft: 10 * 1.5, fontFamily: "Roboto-Black", fontSize: 24, lineHeight: 30 }}>Detail Page</Text>
            </TouchableOpacity>
            <TabScreens />
        </SafeAreaView>
    );
}

export default TabbedScreen;