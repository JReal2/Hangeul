import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'screens/home_screen.dart';
import 'services/tts_service.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => TTSService(),
      child: MaterialApp(
        title: '한글 공부 앱',
        theme: ThemeData(fontFamily: 'NanumGothic'),
        home: HomeScreen(),
      ),
    );
  }
}