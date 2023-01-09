import * as React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, } from 'react-native';
import { useTranslation } from 'react-i18next';
import LottieView from 'lottie-react-native';
import { COLORS, FONTS, } from '../../constants';
import {LinearGradient} from 'expo-linear-gradient';

const CategoryScreen = ({ navigation: { navigate } }) => {
    const { t, i18n } = useTranslation();

    React.useEffect(() => {
        animation.play();
    }, []);

    const onNextPress = () => {
        navigate('BottomTabs')
    }
    const onboardingPress = () => {
        navigate('login');
    }

    return (
        <SafeAreaView style={{
            flex: 1, alignItems: 'center',
            backgroundColor: COLORS.background
        }}>
            <LottieView
                style={{ marginTop: 100, height: 400, paddingHorizontal: 10 }}
                ref={animation => {
                    this.animation = animation;
                }}
                source={require('../../assets/animations/welcome.json')}
            />
            {/* <TouchableOpacity onPress={onNextPress}
                style={{
                    marginTop: 80,
                    width: '60%', backgroundColor: COLORS.primary,
                    borderRadius: 30, paddingHorizontal: 40, paddingVertical: 15
                }}>
                <Text style={{ ...FONTS.body5, color: COLORS.white, textAlign: 'center' }}>{t('common:guestLogin')}</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={onboardingPress}
                style={{
                    marginTop: 40,
                    width: '80%',
                    borderRadius: 30
                }}>
                    <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    colors={[COLORS.primary, COLORS.primary2]}
                    style={{
                    padding: 15, borderRadius: 20, marginBottom: 20,
                    }}
                >
                    <Text style={{ ...FONTS.med4, color: COLORS.white, textAlign: 'center' }}>{t('common:login')}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default CategoryScreen;