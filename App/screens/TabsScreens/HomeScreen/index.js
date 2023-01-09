import * as React from 'react';
import { Text, SafeAreaView, } from 'react-native';
import { COLORS, FONTS } from '../../../constants';
import TopTabs from './TopTabs';

const TabbedScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background, }}>
            <TopTabs />
        </SafeAreaView>
    );
}

export default TabbedScreen;