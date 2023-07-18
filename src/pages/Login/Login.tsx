import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, Image, Alert } from 'react-native';
import styles from './LoginStyle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from 'formik';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';


const Login = ({ navigation }: any) => {

    const { data, loading, error, post } = usePost();

    function handleLogin(values: {}) {
        post(Config.API_AUTH_URL + '/login', values);

    }

    if (!loading) {

        if (data !== null) {
            navigation.navigate('ProductsPage');
        }

        else {
            if(error){
                Alert.alert('HATA', 'Kullanıcı Adı veya Şifre Yanlış');
            }
        }
    }




    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../asstes/logo.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, values, handleChange, handleReset }) => (
                    <View style={styles.body_container}>

                        <Input
                            placeholder="Kullanici Adinizi Giriniz"
                            value={values.username}
                            onType={handleChange('username')}
                            iconName={'account'}
                            isSecure={false}
                        />

                        <Input
                            placeholder="Şifre Giriniz"
                            value={values.password}
                            onType={handleChange('password')}
                            iconName={'key'}
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} load={loading} />
                    </View>
                )}
            </Formik>

        </SafeAreaView>

    );
};

export default Login;