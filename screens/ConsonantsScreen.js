import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

const consonants = [
    { id: '1', letter: 'ㄱ', pronunciation: '기역', examples: ['가방', '고양이', '가위'] },
    { id: '2', letter: 'ㄴ', pronunciation: '니은', examples: ['나비', '노트', '나무'] },
    { id: '3', letter: 'ㄷ', pronunciation: '디귿', examples: ['다리', '달걀', '도토리'] },
    { id: '4', letter: 'ㄹ', pronunciation: '리을', examples: ['라디오', '로봇', '루비'] },
    { id: '5', letter: 'ㅁ', pronunciation: '미음', examples: ['마음', '모자', '물고기'] },
    { id: '6', letter: 'ㅂ', pronunciation: '비읍', examples: ['바다', '볼펜', '바나나'] },
    { id: '7', letter: 'ㅅ', pronunciation: '시옷', examples: ['사과', '새우', '사자'] },
    { id: '8', letter: 'ㅇ', pronunciation: '이응', examples: ['우유', '오리', '연필'] },
    { id: '9', letter: 'ㅈ', pronunciation: '지읒', examples: ['자전거', '종이', '자석'] },
    { id: '10', letter: 'ㅊ', pronunciation: '치읓', examples: ['치약', '초콜릿', '책'] },
    { id: '11', letter: 'ㅋ', pronunciation: '키읔', examples: ['카드', '캥거루', '컵'] },
    { id: '12', letter: 'ㅌ', pronunciation: '티읕', examples: ['토끼', '태양', '테이블'] },
    { id: '13', letter: 'ㅍ', pronunciation: '피읖', examples: ['포도', '피아노', '피자'] },
    { id: '14', letter: 'ㅎ', pronunciation: '히읗', examples: ['하늘', '호수', '호랑이'] },
];

const ConsonantsScreen = ({ navigation }) => {
    const [selectedConsonant, setSelectedConsonant] = useState(null);

    useEffect(() => {
        Tts.setDefaultLanguage('ko-KR');
    }, []);

    const speak = (text) => {
        Tts.speak(text);
    };

    const handleConsonantPress = (consonant) => {
        setSelectedConsonant(consonant);
        speak(consonant.pronunciation);
    };

    const renderConsonant = ({ item }) => (
        <TouchableOpacity style={styles.consonantButton} onPress={() => handleConsonantPress(item)}>
            <Text style={styles.consonantText}>{item.letter}</Text>
        </TouchableOpacity>
    );

    const renderExample = ({ item }) => (
        <Text style={styles.exampleText}>{item}</Text>
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
            {selectedConsonant && (
                <View style={styles.exampleContainer}>
                    <Text style={styles.exampleTitle}>예시 단어:</Text>
                    <FlatList
                        data={selectedConsonant.examples}
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

export default ConsonantsScreen;
