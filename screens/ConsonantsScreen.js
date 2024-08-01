import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

const consonants = [
    { id: '1', letter: 'ㄱ', pronunciation: '기역' },
    { id: '2', letter: 'ㄴ', pronunciation: '니은' },
    { id: '3', letter: 'ㄷ', pronunciation: '디귿' },
    { id: '4', letter: 'ㄹ', pronunciation: '리을' },
    { id: '5', letter: 'ㅁ', pronunciation: '미음' },
    { id: '6', letter: 'ㅂ', pronunciation: '비읍' },
    { id: '7', letter: 'ㅅ', pronunciation: '시옷' },
    { id: '8', letter: 'ㅇ', pronunciation: '이응' },
    { id: '9', letter: 'ㅈ', pronunciation: '지읒' },
    { id: '10', letter: 'ㅊ', pronunciation: '치읓' },
    { id: '11', letter: 'ㅋ', pronunciation: '키읔' },
    { id: '12', letter: 'ㅌ', pronunciation: '티읕' },
    { id: '13', letter: 'ㅍ', pronunciation: '피읖' },
    { id: '14', letter: 'ㅎ', pronunciation: '히읗' },
];

const ConsonantsScreen = ({ navigation }) => {
    useEffect(() => {
        Tts.setDefaultLanguage('ko-KR');
    }, []);

    const speak = (text) => {
        Tts.speak(text);
    };

    const renderConsonant = ({ item }) => (
        <TouchableOpacity style={styles.consonantButton} onPress={() => speak(item.pronunciation)}>
            <Text style={styles.consonantText}>{item.letter}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>자음 배우기</Text>
            <FlatList
                data={consonants}
                renderItem={renderConsonant}
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
    consonantButton: {
        backgroundColor: '#DDDDDD',
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    consonantText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default ConsonantsScreen;
