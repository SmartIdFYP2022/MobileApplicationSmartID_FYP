import * as React from 'react';
import {Text,View,TouchableOpacity, SafeAreaView} from 'react-native';

const SettingScreen = () => {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity>
                <Text>
                    Setting
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default SettingScreen;