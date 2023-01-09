import * as React from 'react';
import {Text,View,TouchableOpacity, SafeAreaView} from 'react-native';

const DashBoardScreen = () => {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity>
                <Text>
                    DashBoardScreen
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default DashBoardScreen;