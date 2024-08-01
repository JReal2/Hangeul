import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LearnScreen from './screens/LearnScreen';
import QuizScreen from './screens/QuizScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Learn" component={LearnScreen} />
                <Stack.Screen name="Consonants" component={ConsonantsScreen} />
                <Stack.Screen name="Vowels" component={VowelsScreen} />
                <Stack.Screen name="Quiz" component={QuizScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

