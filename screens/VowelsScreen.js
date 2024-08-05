import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

const vowels = [
    { id: '1', letter: 'ㅏ', pronunciation: '아', examples: ['아이', '아버지', '아침'] },
    { id: '2', letter: 'ㅑ', pronunciation: '야', examples: ['야구', '야채', '야옹'] },
    { id: '3', letter: 'ㅓ', pronunciation: '어', examples: ['어머니', '어린이', '어제'] },
    { id: '4', letter: 'ㅕ', pronunciation: '여', examples: ['여자', '여행', '여름'] },
    { id: '5', letter: 'ㅗ', pronunciation: '오', examples: ['오리', '오렌지', '오후'] },
    { id: '6', letter: 'ㅛ', pronunciation: '요', examples: ['요리', '요구르트', '요일'] },
    { id: '7', letter: 'ㅜ', pronunciation: '우', examples: ['우유', '우산', '운동'] },
    { id: '8', letter: 'ㅠ', pronunciation: '유', examples: ['유리', '유모차', '유월'] },
    { id: '9', letter: 'ㅡ', pronunciation: '으', examples: ['으뜸', '음악', '은행'] },
    { id: '10', letter: 'ㅣ', pronunciation: '이', examples: ['이름', '이모', '이빨'] },
];

const VowelsScreen = ({ navigation }) => {
    const [selectedVowel, setSelectedVowel] = useState(null);

    useEffect(() => {
        Tts.setDefaultLanguage('ko-KR');
    }, []);

    const speak = (text) => {
        Tts.speak(text);
    };

    const handleVowelPress = (vowel) => {
        setSelectedVowel(vowel);
        speak(vowel.pronunciation);
    };

    const renderVowel = ({ item }) => (
        <TouchableOpacity style={styles.vowelButton} onPress={() => handleVowelPress(item)}>
            <Text style={styles.vowelText}>{item.letter}</Text>
        </TouchableOpacity>
    );

    const renderExample = ({ item }) => (
        <Text style={styles.exampleText}>{item}</Text>
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
            {selectedVowel && (
                <View style={styles.exampleContainer}>
                    <Text style={styles.exampleTitle}>예시 단어:</Text>
                    <FlatList
                        data={selectedVowel.examples}
                        renderItem={renderExample}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )}
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
    exampleContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#EFEFEF',
        borderRadius: 10,
        width: '100%',
    },
    exampleTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    exampleText: {
        fontSize: 20,
        textAlign: 'center',
    },
});

export default VowelsScreen;
