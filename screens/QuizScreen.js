import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

// 퀴즈 데이터 설정
const quizData = [
    {
        question: '이 자음은 무엇인가요? ㄱ',
        options: ['기역', '니은', '디귿', '리을'],
        answer: '기역',
    },
    {
        question: '이 모음은 무엇인가요? ㅏ',
        options: ['아', '어', '우', '이'],
        answer: '아',
    },
    // 추가 퀴즈 항목...
];

const QuizScreen = ({ navigation }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerPress = (selectedOption) => {
        if (selectedOption === quizData[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex + 1 < quizData.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResult(false);
    };

    if (showResult) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>퀴즈 완료!</Text>
                <Text style={styles.score}>점수: {score} / {quizData.length}</Text>
                <Button title="다시하기" onPress={handleRestartQuiz} />
                <Button title="홈으로 돌아가기" onPress={() => navigation.navigate('Home')} />
            </View>
        );
    }

    const currentQuestion = quizData[currentQuestionIndex];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.optionButton}
                    onPress={() => handleAnswerPress(option)}
                >
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            ))}
            <Button title="홈으로 돌아가기" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        textAlign: 'center',
    },
    optionButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        marginVertical: 10,
        width: '100%',
        borderRadius: 5,
    },
    optionText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    score: {
        fontSize: 24,
        marginVertical: 20,
    },
});

export default QuizScreen;
