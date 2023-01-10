import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { signUpRequest } from './actions';
import { useDispatch } from 'react-redux';
import {Dimensions} from 'react-native';
const { width, height } = Dimensions.get("window");
import {LinearGradient} from 'expo-linear-gradient';

const SignUp = ({ navigation: { replace } }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();

    const onChange = (key, value) => {
        key === 'email' ? setEmail(value) : setPassword(value);
    }
    const submitSignup = () => {
        if (!name)
            alert("Enter Name!")
        else if (!email)
            alert("Enter Email!")
        else if (!password)
            alert("Enter Password!")
        else
            dispatch(signUpRequest({ email, password, name }));
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }} >
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', }}>
                <Image source={require('../../../assets/images/logo.png')}/>
                <Text style={{ ...FONTS.h1, marginTop:-60 , color: COLORS.black }}>SIGN UP</Text>
                <TextInput
                    style={{
                        marginTop: 10,
                        borderRadius: 30,
                        width: width - 40,
                        padding: 15, backgroundColor: COLORS.lightBg
                    }}
                    placeholder='Name'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={{
                        marginTop: 20,
                        borderRadius: 30,
                        width: width - 40,
                        padding: 15, backgroundColor: COLORS.lightBg
                    }}
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => onChange('email', text)}
                />
                <TextInput
                    style={{
                        marginTop: 20,
                        borderRadius: 30,
                        width: width - 40,
                        padding: 15, backgroundColor: COLORS.lightBg
                    }}
                    placeholder='Password'
                    value={password}
                    onChangeText={(text) => onChange('password', text)}
                />
                <View style={{ width: '90%', marginTop: 30 }}>
                    <TouchableOpacity
                        onPress={submitSignup}>
                            <LinearGradient
                  start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                  colors={[COLORS.primary, COLORS.primary2]}
                  style={{
                    padding: 15, borderRadius: 20, marginBottom: 20,
                  }}
                >
                        <Text style={{
                            textAlign: 'center', color: COLORS.white, ...FONTS.h4,
                        }}>Submit</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => replace('login')}>
                            <LinearGradient
                  start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                  colors={[COLORS.primary, COLORS.primary2]}
                  style={{
                    padding: 15, borderRadius: 20, marginBottom: 20,
                  }}
                >
                        <Text style={{
                            textAlign: 'center', color: COLORS.white, ...FONTS.h4,
                        }}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default SignUp;
