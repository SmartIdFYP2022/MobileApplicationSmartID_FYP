import * as React from 'react';
import {Text,View,TouchableOpacity, SafeAreaView} from 'react-native';
import { COLORS } from '../../../constants';

const SettingScreen = () => {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: COLORS.background}}>
            <TouchableOpacity>
                <Text>
                    Setting
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default SettingScreen;