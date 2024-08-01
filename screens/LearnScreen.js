import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LearnScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>자음과 모음 배우기</Text>
            <Button
                title="자음 배우기"
                onPress={() => navigation.navigate('Consonants')}
            />
            <Button
                title="모음 배우기"
                onPress={() => navigation.navigate('Vowels')}
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
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
    },
});

export default LearnScreen;
