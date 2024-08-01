import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

const vowels = [
    { id: '1', letter: 'ㅏ', pronunciation: '아' },
    { id: '2', letter: 'ㅑ', pronunciation: '야' },
    { id: '3', letter: 'ㅓ', pronunciation: '어' },
    { id: '4', letter: 'ㅕ', pronunciation: '여' },
    { id: '5', letter: 'ㅗ', pronunciation: '오' },
    { id: '6', letter: 'ㅛ', pronunciation: '요' },
    { id: '7', letter: 'ㅜ', pronunciation: '우' },
    { id: '8', letter: 'ㅠ', pronunciation: '유' },
    { id: '9', letter: 'ㅡ', pronunciation: '으' },
    { id: '10', letter: 'ㅣ', pronunciation: '이' },
];

const VowelsScreen = ({ navigation }) => {
    useEffect(() => {
        Tts.setDefaultLanguage('ko-KR');
    }, []);

    const speak = (text) => {
        Tts.speak(text);
    };

    const renderVowel = ({ item }) => (
        <TouchableOpacity style={styles.vowelButton} onPress={() => speak(item.pronunciation)}>
            <Text style={styles.vowelText}>{item.letter}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>모음 배우기</Text>
            <FlatList
                data={vowels}
                renderItem={renderVowel}
                keyExtractor={item => item.id}
                numColumns={4}
                columnWrapperStyle={styles.row}
            />
            <Button
                title="홈으로 돌아가기"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    row: {
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    vowelButton: {
        backgroundColor: '#DDDDDD',
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    vowelText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default VowelsScreen;
