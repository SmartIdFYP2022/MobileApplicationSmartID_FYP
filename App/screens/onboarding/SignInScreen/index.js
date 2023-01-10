import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { loginRequest } from './actions';
import {Image} from 'react-native'; 
import {LinearGradient} from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
const { width, height } = Dimensions.get("window");

const SignUp = ({ navigation: { replace } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('D@g.com');
  const [password, setPassword] = useState('Admin1');

  const onChange = (key, value) => {
    key === 'email' ? setEmail(value) : setPassword(value);
  }

  const submitLoginRequest = () => {
    if (!email) {
      alert("Enter email!")
    } else if (!password) {
      alert("Enter Password!")
    } else {
      dispatch(loginRequest({ email, password }));
      return;
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }} >
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', }}>
          <Image source={require('../../../assets/images/logo.png')} />
          <Text style={{ ...FONTS.h1, color: COLORS.black }}>LOGIN</Text>
          <TextInput
            style={{
              marginTop: 30,
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
              onPress={submitLoginRequest}
              >
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
              onPress={() => replace('signup')}>
                <LinearGradient
                  start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                  colors={[COLORS.primary, COLORS.primary2]}
                  style={{
                    padding: 15, borderRadius: 20, marginBottom: 20,
                  }}
                >
                <Text style={{
                  textAlign: 'center', color: COLORS.white, ...FONTS.h4,
                }}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
};

export default SignUp;
