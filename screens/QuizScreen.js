import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>한글 공부</Text>
            <Button
                title="자음과 모음 배우기"
                onPress={() => navigation.navigate('Learn')}
            />
            <Button
                title="퀴즈"
                onPress={() => navigation.navigate('Quiz')}
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

export default HomeScreen;
