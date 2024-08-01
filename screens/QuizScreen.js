import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuizScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>퀴즈</Text>
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

export default QuizScreen;
